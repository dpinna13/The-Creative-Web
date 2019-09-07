var stats, scene, renderer;
var camera, cameraControl;


if (!init()) animate();

// init the scene
function init() {
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true, // to get smoother output
  });

  // renderer.setClearColor( 0xBBBBBB, 1 );

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);

  // create a scene
  scene = new THREE.Scene();

  // put a camera in the scene
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, 10);
  scene.add(camera);

  // cameraTwo = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000 );
  // cameraTwo.position.set(0, 0, 5);
  // scene.add(cameraTwo);

  // create a camera contol
  // cameraControls	= new THREEx.DragPanControls(camera)
  cameraControls = new TrackballControls(camera)

  // transparently support window resize (press `f`)
  THREEx.WindowResize.bind(renderer, camera);
  THREEx.FullScreen.bindKey();

  // Add lights to the scene
  var light = new THREE.AmbientLight(Math.random() * 0xffffff);
  scene.add(light);

  var light = new THREE.DirectionalLight(Math.random() * 0xffffff);
  light.position.set(Math.random(), Math.random(), Math.random()).normalize();
  scene.add(light);

  var light = new THREE.DirectionalLight(Math.random() * 0xffffff);
  light.position.set(Math.random(), Math.random(), Math.random()).normalize();
  scene.add(light);

  // here you add your objects
  // - you will most likely replace this part by your own

  var geometry, material, mesh;

  material = new THREE.MeshPhongMaterial({
    ambient: 0x808080,
    color: Math.random() * 0xffffff
  });

  // Sphere
  geometry = new THREE.SphereGeometry(1, 16, 16);
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(2, 2, 2);

  // Add mesh to the scene
  scene.add(mesh);

  // Cube
  geometry = new THREE.CubeGeometry(1, 2, 2);
  // material	= new THREE.MeshPhongMaterial({ambient: 0x808080, color: Math.random() * 0xffffff});
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(-2, -2, -2);

  // Add mesh to the scene
  scene.add(mesh);

  // Torus
  geometry = new THREE.TorusGeometry(1, 0.5);
  material = new THREE.MeshPhongMaterial({
    ambient: 0x808080,
    color: Math.random() * 0xffffff
  });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);

  // Add mesh to the scene
  scene.add(mesh);

  // Create geometry
  // var geometry	= new THREE.TorusGeometry( 1, 0.5 );
  // var geometry	= new THREE.CubeGeometry( 2, 2, 2 );

  // Create material
  // var material	= new THREE.MeshNormalMaterial();
  // var material	= new THREE.MeshToonMaterial({ambient: 0x808080, color: Math.random() * 0xffffff});

  material.flatShading = true;

  // Create mesh by assigning a material to a geometry


}

// animation loop
function animate() {
  requestAnimationFrame(animate);

  // do the render
  render();
}

// render the scene
function render() {
  // variable which is increase by Math.PI every seconds - usefull for animation
  var time = Date.now() * Math.PI;

  // update camera controls
  cameraControls.update();

  // actually render the scene
  renderer.render(scene, camera);

  // // update camera controls
  // cameraControls.update();

  // animation of all objects
  scene.traverse(function(object3d, i) {
    if (object3d instanceof THREE.Mesh === false) return
    object3d.rotation.y = time * 0.0003 * (i % 2 ? 1 : -1);
    object3d.rotation.x = time * 0.0002 * (i % 2 ? 1 : -1);
  })
}
