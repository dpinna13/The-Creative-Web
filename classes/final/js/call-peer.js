/* eslint-disable */
// Handle prefixed versions
navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
// State
let me = {};
let myStream;
const peers = {};
let peerGroup = true;
let peerCallback;
let peerDataCallback;
let peerMediaCallback;

// Start everything up
function initPeer(callback, dataCallback, mediaCallback, settings) {
    settings = settings || { video: true, audio: true, group: true };

    // Mark if group or not
    peerGroup = settings.group;

    // assign global callbacks
    peerCallback = callback;
    peerDataCallback = dataCallback;
    peerMediaCallback = mediaCallback;

    if (!navigator.getUserMedia) return unsupported();

    if (settings.audio || settings.video)
        getLocalStream(settings, function(err, stream) {
            if (err || !stream) return;

            if (mediaCallback) mediaCallback(stream);
            connectToPeerJS(settings.id);
        });
    else {
        connectToPeerJS(settings.id);
    }
}

// Connect to PeerJS and get an ID
function connectToPeerJS(id) {
    // display('New Jam Session Room');

    // create new Peer.js connection
    if (id)
        me = new Peer(id);
    else
        me = new Peer();


    // handle incoming call
    me.on('call', handleIncomingCall);

    // handle open connections
    me.on('open', function() {

        // hide set username form
        var user = document.getElementById("username");
        user.classList.add("d-none");

        // show Connected as label
        var element = document.getElementById("connected");
        element.classList.remove("d-none");

        let userID = document.createElement('span');
        userID.innerText = me.id;
        element.appendChild(userID);

        peerCallback && peerCallback(me.id);
    });

    // handle connection errors
    me.on('error', function(err) {
        display(err);
    });

    // handle incoming data connections
    me.on('connection', function(connection) {
        display('User ' + connection.peer + ' has joined.');

        let peer = getPeer(connection.peer);
        peer.dataChannel = connection;

        // share connected peers
        setTimeout(() => sharePeerGroup(peer));

        connection.on('data', function(data) {
            if (peerGroup && data && data.peer_group) connectToGroup(data.peer_group);
            if (peerDataCallback) peerDataCallback(data, connection.peer);
            // display('Message from ' + connection.peer + ': ' + data + '.');
        });
    });
}

function callPeer(peerId) {
    display('Calling ' + peerId + '...');

    // create new peer connection
    let peer = getPeer(peerId);

    /* Handle audio / video */

    // Create new media stream
    if (myStream) {
        peer.outgoing = me.call(peerId, myStream);
        display('Connected with ' + peerId);
        // handle errors
        peer.outgoing.on('error', function(err) {
            display(err);
        });

        // listen for incoming media streams
        peer.outgoing.on('stream', function(stream) {
            display('Connected to ' + peerId + '.');

            if (peer.stream) return;
            peer.stream = stream;
            // call back with stream
            if (peerMediaCallback) peerMediaCallback(stream, peerId);
        });

    }


    /* Handle Data channels */

    // // create new data stream
    peer.dataChannel = me.connect(peerId);

    peer.dataChannel.on('open', function() {
        // share connected peers
        setTimeout(() => sharePeerGroup(peer));
        // listen for incoming data messages
        peer.dataChannel.on('data', function(message) {
            if (peerGroup && message && message.peer_group) connectToGroup(message.peer_group);
            if (peerDataCallback) peerDataCallback(message, peerId);
            display('Message from ' + peerId + ': ' + message + '.');
        });
    });
}

function sharePeerGroup(peer) {
    const group = Object.keys(peers).filter(peer => peer != me.id);

    if (group.length)
        sendMessage({ peer_group: group });
}

function connectToGroup(group) {
    const newGroup = group.filter(peerId => (!(peerId in peers) && (peerId != me.id)));

    if (newGroup.length)
        newGroup.forEach(peerId => callPeer(peerId));
}

function sendMessage(message) {
    Object.values(peers).forEach((peer) => peer.dataChannel.send(message));
}

// When someone initiates a call via PeerJS
function handleIncomingCall(incoming) {
    display('Answering incoming call from ' + incoming.peer);

    //  get peer object by ID
    let peer = getPeer(incoming.peer);
    peer.incoming = incoming;
    incoming.answer(myStream);

    peer.incoming.on('stream', function(stream) {
        if (peer.stream) return;
        peer.stream = stream;
        if (peerMediaCallback) peerMediaCallback(stream, incoming.peer);
    });
}

// Get access to the microphone
function getLocalStream(settings, callback) {
    display('Trying to access your microphone. Please click "Allow".');
    navigator.getUserMedia({ video: settings.video, audio: settings.audio },

        function success(audioStream) {
            display('Microphone is open.');
            myStream = audioStream;
            if (callback) callback(null, myStream);
        },

        function error(err) {
            display('Couldn\'t connect to microphone. Reload the page to try again.');
            if (callback) callback(err);
        }
    );
}


////////////////////////////////////

// Helper functions
function getPeer(peerId) {
    if (!peers[peerId])
        peers[peerId] = { id: peerId };

    return peers[peerId];
}

function unsupported() {
    display("Your browser doesn't support getUserMedia.");
}

function display(message) {
    let disp = document.getElementById('display');
    if (disp) {
        let msgElm = document.createElement('div');
        msgElm.innerText = message;
        disp.appendChild(msgElm);
        disp.scrollTop = disp.scrollHeight;
    } else {
        console.log(message);
    }
}


function sendNote(message) {
    Object.values(peers).forEach(peer => peer.dataChannel.send(message));
}

function play(message) {
    synth.triggerAttack(message);
}