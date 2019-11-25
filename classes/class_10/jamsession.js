/* Tone.js Setup */
const synth = new Tone.MembraneSynth().toMaster()
const polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster()
const filter = new Tone.AutoFilter().start()

var instrument = "synth";

sendNote();

function setVolumeTo(volumeValue) {
    synth.volume.value = volumeValue;
    console.log("Volume set to " + volumeValue)
}

synth.chain(filter, Tone.Master)

/* Setup WebMIDI */
WebMidi.enable(function(err) {
    if (err) console.log("An error occurred", err);
    console.log(WebMidi.inputs)
    synth.triggerAttackRelease('C2', 0.5, 0)
});


note = document.querySelector('.note')

//attach a listener to the keyboard events
document.querySelector('tone-keyboard').addEventListener('noteon', e => {
    console.log("Note: " + e.detail.name)
    if (instrument == "synth") {
        synth.triggerAttack(e.detail.name)
        console.log("playing " + instrument)

    } else if (instrument == "polySynth") {
        polySynth.triggerAttackRelease(e.detail.name, '4n')
        console.log(instrument)
    }

    sendNote(e.detail.name)
    console.log("Sending:" + e.detail.name)
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
            console.log("ON DATA", message, peerId)
            synth.triggerAttack(message)
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