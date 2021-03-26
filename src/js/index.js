import '../styles/index.scss';

// Import for ARJS image-based version
import initarNFT from './plugins/arNFTInit';
// Import for ARJS marker-based version
import initArMarker from './plugins/arMarkerInit';


// Launch the ARJS simulation mode if ?mode=simulation in URL
const queryString = window.location.search;
let params = new URLSearchParams(queryString);

// ARJS image-based version if ?type=nft
if (params.get("type") === "nft") {
  initarNFT(params.get("mode"));
} else {
  // ARJS marker-based version
  initArMarker(params.get("mode"));
}

console.log(
  `%c Yann's ThreeJS boilerplate`,
  `background: linear-gradient( -70deg, rgba(9,9,121,0.6) 11.2%, rgba(144,6,161,0.6) 53.7%, rgba(0,212,255,0.6) 100.2% );`
);
