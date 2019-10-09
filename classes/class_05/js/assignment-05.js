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
var showAllLabels = false;
var scaleAllPlanets = false;
var newScale = 1;


loader.load('fonts/helvetiker_regular.typeface.json', function(font) {});

function getRandomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
}

var scalePlanets = document.getElementById('scalePlanets');
scalePlanets.addEventListener('click', function() {
    scaleAllPlanets = true;
}, false)

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

var showLabels = document.getElementById('showLabels');
showLabels.addEventListener('click', function() {
    showAllLabels = true;
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

    var sunSurface = new THREE.TextureLoader().load('sun.jpg');
    var moonSurface = new THREE.TextureLoader().load('moon.jpg');
    var earthSurface = new THREE.TextureLoader().load('earth.jpg');
    var marsSurface = new THREE.TextureLoader().load('mars.jpg');
    var venusSurface = new THREE.TextureLoader().load('venus.jpg');
    var mercurySurface = new THREE.TextureLoader().load('mercury.jpg');
    var cosmo = new THREE.TextureLoader().load('cosmo.jpg');

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#3380cc", 1.0);

    document.getElementById('container').appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    // camera = new THREE.OrthographicCamera(-50, 50, 50, -50, 100, 10000000);
    camera.position.set(400, 10, 200);
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

    //On the first day, create the universe
    var geometry = new THREE.SphereGeometry(5000, 35, 35);
    var material = new THREE.MeshBasicMaterial({ map: cosmo, side: THREE.DoubleSide });
    milky_way = new THREE.Mesh(geometry, material);
    milky_way.name = "Milky Way"
    scene.add(milky_way);

    // Let there be lights (to the scene)
    var lightA = new THREE.DirectionalLight("#ffffff");
    lightA.position.set(Math.random(), Math.random(), Math.random()).normalize();
    var lightB = new THREE.AmbientLight("#222222");
    scene.add(lightA, lightB);


    // Add some asteroids in the inner ring
    var asteroidOrbitStart = 30 + (150 * 2.3);
    var asteroidOrbitEnd = 30 + (150 * 2.9);
    var numberofAsteroids = 2000;

    asteroidBelt = new THREE.Object3D();
    scene.add(asteroidBelt);
    for (var i = 0; i < numberofAsteroids; i++) {

        var asteroidSize = getRandomValueBetween(0.005, 1.2),
            asteroidShape1 = getRandomValueBetween(4, 10),
            asteroidShape2 = getRandomValueBetween(4, 10),
            asteroidOrbit = getRandomValueBetween(asteroidOrbitStart, asteroidOrbitEnd),
            asteroidPositionY = getRandomValueBetween(-2, 2);

        var asteroid = new THREE.Mesh(
            new THREE.SphereBufferGeometry(asteroidSize, asteroidShape1, asteroidShape2),
            new THREE.MeshLambertMaterial({ color: "#eeeeee" })
        );

        asteroid.position.y = asteroidPositionY;
        var radians = getRandomValueBetween(0, 360) * Math.PI / 180;
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


    // Check if current mesh is hit by the raycast. Exclude the background "Milky Way", so that the background doesn't "jump" onclick
    scene.traverse(function(object3d, i) {
        if (showAllLabels == true) {
            createTextLabel(object3d.name, object3d);
        }

        // Check if current mesh is hit by the raycast
        if (hits.includes(object3d)) {
            if (object3d.name !== "Milky Way") {
                object3d.scale.set(1.3, 1.3, 1.3);
                createTextLabel(object3d.name, object3d);
            }
        } else if (scaleAllPlanets == true) {
            // sun.scale.set(10, 10, 10)
            scalePlanetsUp()
            newScale = 5;
        } else {
            object3d.scale.set(1, 1, 1)
        }

    })

    // Mercury's orbit = 88 days 
    // mercury.scale.set(newScale);
    mercury.rotation.y = Date.now() * -0.0001;
    mercury.position.x = Math.sin(Date.now() * 0.0002 * 1.24) * 57.9 * 2 * newScale;
    mercury.position.z = Math.cos(Date.now() * 0.0002 * 1.24) * 57.9 * 2 * newScale;

    //Venus's rotation = 224 days
    venus.rotation.y = Date.now() * -0.0001;
    venus.position.x = Math.sin(Date.now() * 0.0002 * 0.61) * 108.16 * 2 * newScale;
    venus.position.z = Math.cos(Date.now() * 0.0002 * 0.61) * 108.16 * 2 * newScale;

    // Earth's orbit = 365 days == 149.15
    earth.rotation.y = Date.now() * -0.0001;
    earth.position.x = Math.sin(Date.now() * 0.0002 * 1) * 149.6 * 2 * newScale;
    earth.position.z = Math.cos(Date.now() * 0.0002 * 1) * 149.6 * 2 * newScale;

    // Moon's orbit = 27 days
    moon.rotation.y = Date.now() * -0.0001;
    moon.position.x = Math.sin(Date.now() * 0.0002 * 1) * 149.6 * 2 * newScale + Math.cos(Date.now() * -0.0007) * -20 * newScale;
    moon.position.z = Math.cos(Date.now() * 0.0002 * 1) * 149.6 * 2 * newScale + Math.sin(Date.now() * -0.0007) * -20 * newScale;

    // Mars's orbit = 694 days
    mars.rotation.y = Date.now() * -0.0001;
    mars.position.x = Math.sin(Date.now() * 0.0002 * 0.7) * 227.9 * 1.5 * newScale;
    mars.position.z = Math.cos(Date.now() * 0.0002 * 0.7) * 227.9 * 1.5 * newScale;

    asteroidBelt.rotation.y -= 0.0001;

    cameraControls.update();
    renderer.render(scene, camera);

    var x = camera.position.x;
    var z = camera.position.z;
    // camera.position.x = x * Math.cos(0.0025) + z * Math.sin(0.0025);
    // camera.position.z = z * Math.cos(0.0025) - x * Math.sin(0.0025);

    // Gently rotate the background rather than the camera
    milky_way.rotation.y = Date.now() * -0.00001;
    camera.lookAt(cameraTarget);

}


function scalePlanetsUp() {
    sun.scale.set(18, 18, 18);
    mercury.scale.set(4, 4, 4);
    venus.scale.set(4, 4, 4);
    earth.scale.set(5, 5, 5);
    moon.scale.set(5, 5, 5);
    mars.scale.set(4, 4, 4);
    asteroidBelt.scale.set(5, 5, 5);
}


if (showAllLabels == true) {
    createTextLabel(object3d.name, object3d);
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