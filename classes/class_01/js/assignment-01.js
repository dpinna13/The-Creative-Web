var scene, renderer;
var camera, cameraControl;
var acceleration = 0;

var createCube = function(x, y, z, color) {
    var geometry = new THREE.CubeGeometry(x, y, z);
    var material = new THREE.MeshPhongMaterial({ color: color });
    return new THREE.Mesh(geometry, material);
}

var rotateCube = function() {
    cube.rotation.x += 0.03 + acceleration / 1000;
    cube.rotation.y += 0.01 + acceleration / 1000;
    cube.rotation.z += 0.01 + acceleration / 1000;
};


if (!init()) animate();

function init() {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#3380cc", 1.0);

    document.getElementById('container').appendChild(renderer.domElement);

    // create a scene
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(10, 5, 15);
    scene.add(camera);

    cameraControls = new TrackballControls(camera)
    THREEx.WindowResize.bind(renderer, camera);

    // Add lights to the scene
    var lightA = new THREE.DirectionalLight("#ffffff");
    lightA.position.set(Math.random(), Math.random(), Math.random()).normalize();
    var lightB = new THREE.AmbientLight(0x404040); // soft white light scene.add( light );
    scene.add(lightA, lightB);

    for (var i = 0; i < 4; i++) {
        cube = createCube(1, 1, 1, "#2d00b3");
        scene.add(cube);
        cube.geometry.translate(Math.floor(Math.random() * 10) + 7, 0, 0);
        console.log(i);
    }

    cubeA = createCube(1, 1, 1, "#33cc59");
    cubeA.geometry.translate(5, 0, 0);

    cubeB = createCube(1, 1, 1, "#cc3333");
    cubeB.geometry.translate(0, 0, 7);

    cubeC = createCube(2, 2, 2, "#ffc34d");
    cubeC.geometry.translate(9, 0, 0);

    cube = createCube(3, 3, 3, "#b366ff");
    scene.add(cube, cubeA, cubeB, cubeC);

}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    // variable which is increase by Math.PI every seconds - usefull for animation
    var time = Date.now() * Math.PI;
    cubeA.rotation.y = 2 + (time * 0.0003);
    cubeB.rotation.x = 2 + (time * 0.0005);
    cubeC.rotation.y = 2 + (time * 0.0001);

    cameraControls.update();
    renderer.render(scene, camera);

}