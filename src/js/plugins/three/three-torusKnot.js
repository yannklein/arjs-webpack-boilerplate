import * as THREE from 'three';

const createTorusKnot = scene => {
  var geometry  = new THREE.BoxGeometry(1,1,1);
  var material  = new THREE.MeshNormalMaterial({
    transparent : true,
    opacity: 0.5,
    side: THREE.DoubleSide
  });
  var mesh  = new THREE.Mesh( geometry, material );
  mesh.position.y = geometry.parameters.height/2
  scene.add( mesh );

  var geometry  = new THREE.TorusKnotGeometry(0.3,0.1,64,16);
  var material  = new THREE.MeshNormalMaterial();
  var mesh  = new THREE.Mesh( geometry, material );
  mesh.position.y = 0.5
  scene.add( mesh );

  // scene.animationQueue.push(function(delta){
  //   mesh.rotation.x += Math.PI*delta
  // })
};

export default createTorusKnot;
