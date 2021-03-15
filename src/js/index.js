import '../styles/index.scss';

// import initThree from './plugins/three/three-init';
import initAr from './plugins/ar-init';

console.log(
  `%c Yann's ThreeJS boilerplate`,
  `background: linear-gradient( -70deg, rgba(9,9,121,0.6) 11.2%, rgba(144,6,161,0.6) 53.7%, rgba(0,212,255,0.6) 100.2% );`
);

// Launch the ARJS simulation mode if ?mode=simulation in URL
const queryString = window.location.search;
let params = new URLSearchParams(queryString);

initAr(params.get("mode"));
