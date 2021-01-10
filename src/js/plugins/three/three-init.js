import * as THREE from 'three';
import createCube from './three-cube';

const initScene = threeEl => {
  const camera = new THREE.PerspectiveCamera(
    70,
    threeEl.offsetWidth / threeEl.offsetHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(threeEl.offsetWidth, threeEl.offsetHeight);
  threeEl.appendChild(renderer.domElement);

  const onWindowResize = () => {
    camera.aspect = threeEl.offsetWidth / threeEl.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(threeEl.offsetWidth, threeEl.offsetHeight);
  };

  window.addEventListener('resize', onWindowResize, false);

  scene.animationQueue = [];
  const animate = () => {
    requestAnimationFrame(animate);
    scene.animationQueue.forEach(animation => {
      animation(scene);
    });

    renderer.render(scene, camera);
  };
  animate();

  return {
    scene,
    camera,
    renderer
  };
};

const initThree = threeEl => {
  const { scene } = initScene(threeEl);
  createCube(scene);
};

export default initThree;
