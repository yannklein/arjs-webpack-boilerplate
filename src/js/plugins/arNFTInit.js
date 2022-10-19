import * as THREE from 'three';
import * as THREEx from 'arMarker';

import createTorusKnot from './three/three-torusKnot';

THREEx.ArToolkitContext.baseURL = 'assets/';

const initarNFT = (mode = 'production') => {
  //////////////////////////////////////////////////////////////////////////////////
  //    Init
  //////////////////////////////////////////////////////////////////////////////////

  var renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: 'mediump',
  });

  var clock = new THREE.Clock();

  var mixers = [];

  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.setClearColor(new THREE.Color('lightgrey'), 0)
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.style.position = 'absolute'
  renderer.domElement.style.top = '0px'
  renderer.domElement.style.left = '0px'
  document.body.appendChild( renderer.domElement );

  // init scene and camera
  var scene = new THREE.Scene();

  //////////////////////////////////////////////////////////////////////////////////
  //    Initialize a basic camera
  //////////////////////////////////////////////////////////////////////////////////

  // Create a camera
  var camera = new THREE.Camera();
  scene.add(camera);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  ////////////////////////////////////////////////////////////////////////////////
  //          handle arToolkitSource
  ////////////////////////////////////////////////////////////////////////////////

  // prepare source type depending simulation/production mode
  const sourceType = {
    sourceWidth: 480,
    sourceHeight: 640
  };
  if (mode === 'simulation') {
    sourceType.sourceType = 'image';
    sourceType.sourceUrl = THREEx.ArToolkitContext.baseURL + 'pinball_sample.jpg';
  } else {
    sourceType.sourceType = 'webcam';
  }

  var arToolkitSource = new THREEx.ArToolkitSource(sourceType);

  arToolkitSource.init(function onReady(){
      // use a resize to fullscreen mobile devices
      setTimeout(function() {
          onResize()
      }, 1000);
  })

  // handle resize
  window.addEventListener('resize', function(){
      onResize()
  })

  // listener for end loading of NFT marker
  window.addEventListener('arjs-nft-loaded', function(ev){
    console.log(ev);
  })

  function onResize(){
      arToolkitSource.onResizeElement()
      arToolkitSource.copyElementSizeTo(renderer.domElement)
      if( arToolkitContext.arController !== null ){
          arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas)
      }
  }

  ////////////////////////////////////////////////////////////////////////////////
  //          initialize arToolkitContext
  ////////////////////////////////////////////////////////////////////////////////

  // create atToolkitContext
  var arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: THREEx.ArToolkitContext.baseURL + 'camera_para.dat',
      detectionMode: 'mono',
      canvasWidth: 480,
      canvasHeight: 640,
  }, {
      sourceWidth: 480,
      sourceHeight: 640,
  })

  // initialize it
  arToolkitContext.init(function onCompleted(){
      // copy projection matrix to camera
      camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
  })

  ////////////////////////////////////////////////////////////////////////////////
  //          Create a ArMarkerControls
  ////////////////////////////////////////////////////////////////////////////////

  // init controls for camera
  var markerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
      type : 'nft',
      descriptorsUrl : THREEx.ArToolkitContext.baseURL + "pinball",
      changeMatrixMode: 'cameraTransformMatrix'
  })

  scene.visible = false

  var root = new THREE.Object3D();
  scene.add(root);

  //////////////////////////////////////////////////////////////////////////////////
  //    add an object in the scene
  //////////////////////////////////////////////////////////////////////////////////

  // add a torus knot
  createTorusKnot(root);

  root.scale.x = 100;
  root.scale.y = 100;
  root.scale.z = 100;

  root.position.z = -200;
  root.position.x = 0;
  root.position.y = 100;
  window.root = root;

  //////////////////////////////////////////////////////////////////////////////////
  //    render the whole thing on the page
  //////////////////////////////////////////////////////////////////////////////////

  var animate = function() {
      requestAnimationFrame(animate);

      if (mixers.length > 0) {
          for (var i = 0; i < mixers.length; i++) {
              mixers[i].update(clock.getDelta());
          }
      }

      if (!arToolkitSource.ready) {
          return;
      }

      arToolkitContext.update( arToolkitSource.domElement )

      // update scene.visible if the marker is seen
      scene.visible = camera.visible;

      renderer.render(scene, camera);
  };

  requestAnimationFrame(animate);
}

export default initarNFT;
