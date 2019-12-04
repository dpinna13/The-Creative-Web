/* Tone.js Setup */
const synth = new Tone.MembraneSynth().toMaster()
const polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster()
const filter = new Tone.AutoFilter().start()
const kick = new Tone.MembraneSynth({
    'envelope': {
        'sustain': 0,
        'attack': 0.02,
        'decay': 0.8
    },
    'octaves': 10
}).toMaster();
const snare = new Tone.NoiseSynth({
    'volume': -5,
    'envelope': {
        'attack': 0.001,
        'decay': 0.2,
        'sustain': 0
    },
    'filterEnvelope': {
        'attack': 0.001,
        'decay': 0.1,
        'sustain': 0
    }
}).toMaster();
var payload = [];
var instrument = "synth";

sendNote();

function changeInstrument(newInstrument) {
    instrument = newInstrument
    console.log("change instrument to " + newInstrument)
}

function stopBeats() {
    display("Stop beats loop")
    Tone.Transport.stop();
    sendNote("stop beats")
}

function startBeats() {
    display("Start beats loop")
    sendNote("start beats")

    var kickPart = new Tone.Loop(function(time) {
        kick.triggerAttackRelease('C2', '8n', time);
    }, '2n').start(0);

    var snarePart = new Tone.Loop(function(time) {
        snare.triggerAttack(time);
    }, '2n').start('4n');

    Tone.Transport.bpm.value = 90;
    Tone.Transport.start('+0.1');
}

function setVolumeTo(volumeValue) {
    synth.volume.value = volumeValue;
    polySynth.volume.value = volumeValue;
    kick.volume.value = volumeValue;
    snare.volume.value = volumeValue;
    console.log("Volume set to " + volumeValue)
}

synth.chain(filter, Tone.Master)

/* Setup WebMIDI */
WebMidi.enable(function(err) {
    if (err) console.log("An error occurred", err);
    // console.log(WebMidi.inputs)
    // synth.triggerAttackRelease('C2', 0.5, 0)
});

function emptyPayload() {
    payload.length = 0;
    message = "";
}

note = document.querySelector('.note')

//attach a listener to the keyboard events
document.querySelector('tone-keyboard').addEventListener('noteon', e => {
    if (instrument == "synth") {
        synth.triggerAttack(e.detail.name)

    } else if (instrument == "polySynth") {
        polySynth.triggerAttackRelease(e.detail.name, '4n')
    }
    console.log("Playing " + instrument + " " + e.detail.name)
    payload.push(instrument);
    payload.push(e.detail.name);
    console.log("Saved " + payload[0] + " playing " + payload[1]);
    sendNote(payload);
    payload = [];
    // sendInstrumentNote(instrument, e.detail.name)
    // console.log("Sent: " + instrument + " " + e.detail.name)
})

/* initialize Peer.js real-time connection */
function connect(id) {
    initPeer(
        // called on initial connection (on Peer.js initialization)
        function onConnection(myPeerId) {
            console.log("MY ID", myPeerId)
        },

        // called on incoming data messages (every message)
        function onData(message, peerId) {
            console.log("ON DATA", "message is " + message, "id " + peerId)
            switch (message) {
                case 'start beats':
                    display("OK Starting beats");
                    startBeats();
                    message = "";
                    break;
                case 'stop beats':
                    display("OK Stopping beats");
                    stopBeats();
                    emptyPayload();
                    break;
                default:
                    var instrument = message[0];
                    var note = message[1];
                    if (instrument == "synth") {
                        synth.triggerAttack(note);
                    } else if (instrument == "polySynth" || instrument == "polysynth") {
                        polySynth.triggerAttackRelease(note, '4n')
                    }
            }
            message = "";

        },

        // called on incoming media stream connections (on connection)
        // for local media stream, peerId is `undefined`
        function onMediaStream(stream, peerId) {
            // stream is an instance of the MediaStream class
            // it contains both audio and video streaming tracks
            // Here's the documentation: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream

            if (peerId) {
                console.log("ON REMOTE STREAM", peerId, stream)
            } else {
                console.log("ON LOCAL STREAM", stream)
            }

        }, {
            id: id,
            video: false,
            audio: false
        }
    )
}




// Call a peer
// callPeer(peerId: string)

// send message to all connected peers
// sendMessage(message: string)

// send message to one peer
// sendMessage(message: string, peerId: string)