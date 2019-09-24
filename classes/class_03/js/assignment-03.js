var scene, renderer;
var camera, cameraControl;
var shouldRaycast;
var cameraTarget = new THREE.Vector3(0, 0, 0);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var video, texture, material, mesh;
var acceleration = 0;

var createPlanet = function(x, y, z, color) {
    var geometry = new THREE.SphereGeometry(x, y, z);
    var material = new THREE.MeshPhongMaterial({ color: color });
    return new THREE.Mesh(geometry, material);
}

var rotateCube = function() {
    cube.rotation.x += 0.03 + acceleration / 1000;
    cube.rotation.y += 0.01 + acceleration / 1000;
    cube.rotation.z += 0.01 + acceleration / 1000;
};

var updateFcts = [];





var startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
    video.play();
    console.log("play video")
}, false);

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}


if (!init()) animate();

function init() {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#3380cc", 1.0);

    document.getElementById('container').appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(-180, 25, 15);


    // create a scene
    scene = new THREE.Scene();
    scene.add(camera);

    cameraControls = new TrackballControls(camera)
    THREEx.WindowResize.bind(renderer, camera);

    var geometry = new THREE.SphereBufferGeometry(100, 60, 40);
    geometry.scale(-20, 20, 20);

    video = document.getElementById('video');
    video.play();

    texture = new THREE.VideoTexture(video);

    var material = new THREE.MeshBasicMaterial({
        map: texture
    }, console.log("texture loaded"));

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add lights to the scene
    var lightA = new THREE.DirectionalLight("#ffffff");
    lightA.position.set(Math.random(), Math.random(), Math.random()).normalize();
    var lightB = new THREE.AmbientLight(0x404040); // soft white light scene.add( light );
    scene.add(lightA, lightB);

    // for (var i = 0; i < 1; i++) {
    //     cube = createPlanet(1, 32, 32, "#2d00b3");
    //     scene.add(cube);
    //     cube.translateX(Math.floor(Math.random() * 15) + 20);
    // }

    sun = createPlanet(10, 32, 32, "#ffef3d");

    earth = createPlanet(5, 32, 32, "#b366ff");

    moon = createPlanet(1, 32, 32, "#cc3333");

    mercury = createPlanet(2, 32, 32, "#4da6ff");
    mercury.translateX(19);

    scene.add(sun, earth, moon, mercury);
}

function onVideoPlayButtonClick() {
    video.play()
}

function onVideoPauseButtonClick() {
    video.pause()
}

function animate() {
    requestAnimationFrame(animate);
    render();


}


function render() {

    var hits = []

    if (shouldRaycast) { // check if mouse is pressed
        // Perform a ray cast from the camera, in the direction of the mouse in 3d space
        raycaster.setFromCamera(mouse, camera);

        // Extract intersected objects (from a particular scene or parent Object3D)
        var intersections = raycaster.intersectObjects(scene.children);
        // Log all intersections
        // Map intersected meshes to the hits array
        hits = intersections.map(intersection => intersection.object)
    }

    // variable which is increase by Math.PI every seconds - usefull for animation
    var time = Date.now() * Math.PI;


    mercury.rotation.x = Math.sin(Date.now() * 2) * 50;
    mercury.rotation.y = Date.now() * -0.01;
    mercury.rotation.z = Math.sin(Date.now() * 0.02) * 50;

    earth.rotation.y = Date.now() * -0.001;
    earth.position.x = Math.sin(Date.now() * 0.001) * 119.15;
    earth.position.z = Math.cos(Date.now() * 0.001) * 119.15;

    moon.rotation.y = Date.now() * -0.001;
    moon.position.x = Math.sin(Date.now() * 0.001) * 119.15 + Math.cos(Date.now() * -0.007) * -10;
    moon.position.z = Math.cos(Date.now() * 0.001) * 119.15 + Math.sin(Date.now() * -0.007) * -10;


    // sun.rotation.y = 2 + (time * 0.0003);
    // cubeB.rotation.x = 2 + (time * 0.0005);
    // mercury.rotation.y = 2 + (time * 0.0001);

    cameraControls.update();
    renderer.render(scene, camera);


    var x = camera.position.x;
    var z = camera.position.z;
    camera.position.x = x * Math.cos(0.01) + z * Math.sin(0.01);
    camera.position.z = z * Math.cos(0.01) - x * Math.sin(0.01);
    // re-Rotate the camerea to look at the cameraTarget at the center of the scene
    camera.lookAt(cameraTarget);


    scene.traverse(function(object3d, i) {
        // Check if the current object is a THREE.Mesh (rather than a light, camera, etc.)
        // if (object3d instanceof THREE.Mesh === false) return
        // Rotate object based on `n` coefficient
        // object3d.rotateY(0.01 * object3d.n);
        // object3d.rotateX(0.02 * object3d.n);
        // object3d.rotateZ(0.03 * object3d.n);

        // Check if current mesh is hit by the raycast
        if (hits.includes(object3d)) {
            object3d.scale.set(1.2, 1.2, 1.2)
        } else {
            object3d.scale.set(1, 1, 1)
                // console.log("not hit")
        }

    })



}


window.addEventListener('pointermove', function(event) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // console.log("X " + mouse.x);
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})
window.addEventListener('pointerdown', function(event) {
    shouldRaycast = true;
})
window.addEventListener('pointerup', function(event) {
    shouldRaycast = false;
})