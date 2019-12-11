/* eslint-disable */

// Instruments setup //
const playButton = document.getElementById("play-beat");
const stopButton = document.getElementById("stop-beat");
const synth = new Tone.MembraneSynth().toMaster();
const polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();
var piano = new Tone.PolySynth(4, Tone.Synth, {
    "oscillator": {
        "partials": [1, 2, 5],
    },
    "portamento": 0.005
}).toMaster();
const fmSynth = new Tone.FMSynth().toMaster();
const mono = new Tone.MonoSynth().toMaster();
const filter = new Tone.AutoFilter().start();
const bass = new Tone.MonoSynth({
    "oscillator": {
        "type": "fmsquare5",
        "modulationType": "triangle",
        "modulationIndex": 2,
        "harmonicity": 0.501
    },
    "filter": {
        "Q": 1,
        "type": "lowpass",
        "rolloff": -24
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.4,
        "release": 2
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.8,
        "release": 1.5,
        "baseFrequency": 50,
        "octaves": 4.4
    }
}).toMaster();

const kick = new Tone.MembraneSynth({
    envelope: { sustain: 0, attack: 0.02, decay: 0.8 },
    octaves: 10,
}).toMaster();
const snare = new Tone.NoiseSynth({
    volume: -5,
    envelope: { attack: 0.001, decay: 0.2, sustain: 0 },
    filterEnvelope: { attack: 0.001, decay: 0.1, sustain: 0 },
}).toMaster();

var payload = [];
var instrument = 'mono';

sendNote();

function changeInstrument(newInstrument) {
    instrument = newInstrument;
    display(`Now playing the ${newInstrument}`);
}

function stopBeats() {
    display('Stop beats loop');
    Tone.Transport.stop();
}

function startBeats() {
    display('Start beats loop');
    const kickPart = new Tone.Loop(function(time) { kick.triggerAttackRelease('C2', '8n', time); }, '2n').start(0);
    const snarePart = new Tone.Loop(function(time) { snare.triggerAttack(time); }, '2n').start('4n');
    Tone.Transport.bpm.value = 90;
    Tone.Transport.start('+0.1');
}

function startLocalBeats() {
    sendNote('start beats');
    startBeats();
    playButton.classList.remove("btn-outline-secondary");
    playButton.classList.add("btn-secondary");
    stopButton.classList.remove("btn-secondary");
    stopButton.classList.add("btn-outline-secondary");
}

function stopLocalBeats() {
    sendNote('stop beats');
    stopBeats();
    playButton.classList.add("btn-outline-secondary");
    playButton.classList.remove("btn-secondary");
    stopButton.classList.add("btn-secondary");
    stopButton.classList.remove("btn-outline-secondary");
}

synth.chain(filter, Tone.Master);

/* Setup WebMIDI */
WebMidi.enable(function(err) {
    if (err) console.error('An error occurred', err);
});

function emptyPayload() {
    payload.length = 0;
    message = '';
}

note = document.querySelector('.note');

// attach a listener to the keyboard events
document.querySelector('tone-keyboard').addEventListener('noteon', (e) => {
    switch (instrument) {
        case "synth":
            synth.triggerAttack(e.detail.name);
            break;
        case "polySynth":
            polySynth.triggerAttackRelease(e.detail.name, '4n');
            break;
        case "piano":
            piano.triggerAttackRelease(e.detail.name, '4n');
            break;
        case "mono":
            mono.triggerAttackRelease(e.detail.name, "8n");
            break;
        case "fmSynth":
            fmSynth.triggerAttackRelease(e.detail.name, "8n");
            break;
        case "bass":
            bass.triggerAttackRelease(e.detail.name, "8n");
            break;
        default:
            mono.triggerAttackRelease(e.detail.name, "8n");
            break;
    }

    display(`Playing ${instrument} ${e.detail.name}`);
    payload.push(instrument);
    payload.push(e.detail.name);
    sendNote(payload);
    payload = [];
});

/* initialize Peer.js real-time connection */
function connect(id) {
    initPeer(
        // called on initial connection (on Peer.js initialization)
        function onConnection(myPeerId) {
            // display('MY ID', myPeerId);
        },

        // called on incoming data messages (every message)
        function onData(message, peerId) {
            switch (message) {
                case 'start beats':
                    display('OK Starting beats');
                    startBeats();
                    message = '';
                    break;
                case 'stop beats':
                    display('OK Stopping beats');
                    stopBeats();
                    emptyPayload();
                    break;
                default:
                    var instrument = message[0];
                    var note = message[1];
                    switch (instrument) {
                        case 'synth':
                            synth.triggerAttack(note);
                            break;
                        case 'polySynth':
                            polySynth.triggerAttackRelease(note, '4n');
                            break;
                        case 'fmSynth':
                            fmSynth.triggerAttackRelease(note, "8n");
                            break;
                        case "piano":
                            piano.triggerAttackRelease(note, '4n');
                            break;
                        case "mono":
                            mono.triggerAttackRelease(note, "8n");
                            break;
                        case "bass":
                            bass.triggerAttackRelease(note, "8n");
                            break;
                        default:
                            mono.triggerAttackRelease(note, "8n");
                            break;
                    }

            }
            message = '';
        },

        // called on incoming media stream connections (on connection)
        // for local media stream, peerId is `undefined`
        function onMediaStream(stream, peerId) {
            // stream is an instance of the MediaStream class
            // it contains both audio and video streaming tracks
            // Here's the documentation: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream
            if (peerId) {
                // console.log('ON REMOTE STREAM', peerId, stream)
            } else {
                // console.log('ON LOCAL STREAM', stream)
            }
        }, {
            id: id,
            video: false,
            audio: false,
        },
    );
}

// Call a peer
// callPeer(peerId: string)

// send message to all connected peers
// sendMessage(message: string)

// send message to one peer
// eslint-disable-next-line eol-last
// sendMessage(message: string, peerId: string)