var scene, renderer;
var camera, cameraControl;
var shouldRaycast;
var cameraTarget = new THREE.Vector3(0, 0, 0);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var video, texture, material, mesh;
var acceleration = 0;
var loader = new THREE.FontLoader();
var textlabels = [];
var showLabels = false;
var sunSurface = new THREE.TextureLoader().load('sun.jpg');
var moonSurface = new THREE.TextureLoader().load('moon.jpg');
var earthSurface = new THREE.TextureLoader().load('earth.jpg');
var marsSurface = new THREE.TextureLoader().load('mars.jpg');
var venusSurface = new THREE.TextureLoader().load('venus.jpg');
var mercurySurface = new THREE.TextureLoader().load('mercury.jpg');
var cosmo = new THREE.TextureLoader().load('cosmo.jpg');

loader.load('fonts/helvetiker_regular.typeface.json', function(font) {});

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

var createPlanet = function(x, width, height, color) {
    var geometry = new THREE.SphereGeometry(x, width, height);
    var material = new THREE.MeshPhongMaterial({ color: color });
    return new THREE.Mesh(geometry, material);
}

var createPlanetWithPattern = function(x, width, height, surface) {
    var texture = surface;
    var geometry = new THREE.SphereGeometry(x, width, height);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    return new THREE.Mesh(geometry, material);
}

var startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
    video.playbackrate = 0.5;
    video.play();
    console.log("show labels")
}, false);

var showLabels = document.getElementById('showLabels');
showLabels.addEventListener('click', function() {
    showLabels = true;
}, false)

var hideLabels = document.getElementById('hideLabels');
hideLabels.addEventListener('click', function() {
    showLabels = false;
}, false)


function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function makeTextSprite(message) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');


    var fontface = "Arial";
    var fontsize = 24;
    context.font = "Bold " + fontsize + "px " + fontface;

    // text color
    context.fillStyle = "#FFFFFF";
    context.fillText(message, 1, fontsize);

    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas)
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(100, 50, 1.0);
    return sprite;
}

function createTextLabel(label, object3d) {

    var label = makeTextSprite(label);
    label.position.set(object3d.position.x + 8, object3d.position.y + 5, object3d.position.z);
    scene.add(label);

}




if (!init()) animate();

function init() {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#3380cc", 1.0);

    document.getElementById('container').appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
    // camera = new THREE.OrthographicCamera(-50, 50, 50, -50, 100, 10000000);
    camera.position.set(-180, 80, 200);
    camera.position.z = 200;

    // create a scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.00008);
    scene.add(camera);

    cameraControls = new TrackballControls(camera);
    cameraControls.rotateSpeed = 1.0;
    cameraControls.zoomSpeed = 1.2;
    cameraControls.panSpeed = 0.8;
    cameraControls.noZoom = false;
    cameraControls.noPan = false;
    cameraControls.staticMoving = true;
    cameraControls.dynamicDampingFactor = 0.3;


    THREEx.WindowResize.bind(renderer, camera);

    //Create the universe
    var geometry = new THREE.SphereBufferGeometry(120, 32, 32);
    geometry.scale(-50, 20, 20);
    // video = document.getElementById('video');
    // video.playbackRate = 0.25;
    // video.play();
    // texture = new THREE.VideoTexture(video);
    var material = new THREE.MeshBasicMaterial({ map: cosmo, side: THREE.DoubleSide });
    mesh = new THREE.Mesh(geometry, material);
    mesh.name = "Milky Way"
    scene.add(mesh);

    // Add lights to the scene
    var lightA = new THREE.DirectionalLight("#ffffff");
    lightA.position.set(Math.random(), Math.random(), Math.random()).normalize();
    // var lightB = new THREE.AmbientLight(0x404040); // soft white light scene.add( light );
    scene.add(new THREE.AmbientLight(0x222222));
    scene.add(lightA);

    var asteroidOrbitStart = 30 + (150 * 2.3);
    var asteroidOrbitEnd = 30 + (150 * 2.9);

    asteroidBelt = new THREE.Object3D();
    scene.add(asteroidBelt);
    nAst = 2500;
    for (var i = 0; i < nAst; i++) {
        // asteroids = createPlanet(25, 32, 32, "#d3d3d3");
        // scene.add(asteroids);
        // //distributing asteroids over a circumference
        // // C = 2*pi*r
        // asteroids.translateX((200 - 25 + 225 + Math.cos(2 * Math.PI * i)));
        // asteroids.translateZ((200 - 25 + 225 + Math.sin(2 * Math.PI * i)));
        // // asteroids.translateZ(i + 2 * Math.PI * 100);
        // cube.translateX(Math.floor(Math.random() * 15) + 20);

        var asteroidSize = getRandomValue(0.005, 1.2),
            asteroidShape1 = getRandomValue(4, 10),
            asteroidShape2 = getRandomValue(4, 10),
            asteroidOrbit = getRandomValue(asteroidOrbitStart, asteroidOrbitEnd),
            asteroidPositionY = getRandomValue(-2, 2);

        var asteroid = new THREE.Mesh(new THREE.SphereGeometry(asteroidSize, asteroidShape1, asteroidShape2), new THREE.MeshLambertMaterial({ color: 0xeeeeee }));

        asteroid.position.y = asteroidPositionY;
        var radians = getRandomValue(0, 360) * Math.PI / 180;
        asteroid.position.x = Math.cos(radians) * asteroidOrbit;
        asteroid.position.z = Math.sin(radians) * asteroidOrbit;

        asteroidBelt.add(asteroid);


    }


    sun = createPlanetWithPattern(25, 32, 32, sunSurface);
    sun.name = "Sun";
    mercury = createPlanetWithPattern(4.8, 32, 32, mercurySurface);
    mercury.name = "Mercury";
    venus = createPlanetWithPattern(12.1, 32, 32, venusSurface);
    venus.name = "Venus";
    earth = createPlanetWithPattern(12.75, 32, 32, earthSurface);
    earth.name = "Earth";
    moon = createPlanetWithPattern(2, 32, 32, moonSurface);
    moon.name = "Moon";
    mars = createPlanetWithPattern(6.79, 32, 32, marsSurface);
    mars.name = "Mars";

    scene.add(sun, mercury, venus, earth, moon, mars);
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


    // Mercury's orbit = 88 days 
    mercury.rotation.y = Date.now() * -0.0001;
    mercury.position.x = Math.sin(Date.now() * 0.0002 * 1.24) * 57.9 * 2;
    mercury.position.z = Math.cos(Date.now() * 0.0002 * 1.24) * 57.9 * 2;

    //Venus's rotation = 224 days
    venus.rotation.y = Date.now() * -0.0001;
    venus.position.x = Math.sin(Date.now() * 0.0002 * 0.61) * 108.16 * 2;
    venus.position.z = Math.cos(Date.now() * 0.0002 * 0.61) * 108.16 * 2;

    // Earth's orbit = 365 days == 149.15
    earth.rotation.y = Date.now() * -0.0001;
    earth.position.x = Math.sin(Date.now() * 0.0002 * 1) * 149.6 * 2;
    earth.position.z = Math.cos(Date.now() * 0.0002 * 1) * 149.6 * 2;

    // Moon's orbit = 27 days
    moon.rotation.y = Date.now() * -0.0001;
    moon.position.x = Math.sin(Date.now() * 0.0002 * 1) * 149.6 * 2 + Math.cos(Date.now() * -0.0007) * -20;
    moon.position.z = Math.cos(Date.now() * 0.0002 * 1) * 149.6 * 2 + Math.sin(Date.now() * -0.0007) * -20;

    // Mars's orbit = 694 days
    mars.rotation.y = Date.now() * -0.0001;
    mars.position.x = Math.sin(Date.now() * 0.0002 * 0.7) * 227.9 * 1.5;
    mars.position.z = Math.cos(Date.now() * 0.0002 * 0.7) * 227.9 * 1.5;

    asteroidBelt.rotation.y += 0.0001;


    cameraControls.update();
    renderer.render(scene, camera);

    var x = camera.position.x;
    var z = camera.position.z;
    camera.position.x = x * Math.cos(0.0025) + z * Math.sin(0.0025);
    camera.position.z = z * Math.cos(0.0025) - x * Math.sin(0.0025);
    // re-Rotate the camerea to look at the cameraTarget at the center of the scene
    camera.lookAt(cameraTarget);


    scene.traverse(function(object3d, i) {
        // Check if the current object is a THREE.Mesh (rather than a light, camera, etc.)
        // if (object3d instanceof THREE.Mesh === false) return
        // Rotate object based on `n` coefficient
        // object3d.rotateY(0.01 * object3d.n);
        // object3d.rotateX(0.02 * object3d.n);
        // object3d.rotateZ(0.03 * object3d.n);

        if (showLabels == true) {
            createTextLabel(object3d.name, object3d);
        }

        // Check if current mesh is hit by the raycast
        if (hits.includes(object3d)) {
            if (object3d.name !== "Milky Way") {
                object3d.scale.set(1.3, 1.3, 1.3);
                createTextLabel(object3d.name, object3d);
            }
        } else {
            object3d.scale.set(1, 1, 1)
        }

    })



}


window.addEventListener('pointermove', function(event) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})
window.addEventListener('pointerdown', function(event) {
    shouldRaycast = true;
})
window.addEventListener('pointerup', function(event) {
    shouldRaycast = false;
})