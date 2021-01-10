import './styles/index.scss';

import initThree from './three/three-init';

console.log(
  `%c Yann's ThreeJS boilerplate`,
  `background: linear-gradient( -70deg, rgba(9,9,121,0.6) 11.2%, rgba(144,6,161,0.6) 53.7%, rgba(0,212,255,0.6) 100.2% );`
);

const threeEl = document.querySelector('.three-js');
if (threeEl) {
  initThree(threeEl);
}
