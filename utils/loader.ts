import loadingplanet from "../public/image/svg/loading/loadingplanet.svg";
import loadingring1 from "../public/image/png/loading/loadingring1.png";
import loadingring2 from "../public/image/png/loading/loadingring2.png";

export const loader = `
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}
body{
display: block;
overflow-y: hidden;
overflow-x: hidden;
}
#globalLoader{
    position: fixed;
    z-index: 100;
    background-color: #0d1117;
    left: 0,
    top: 0;
    width: 100dvw;
    height: 100dvh;
    transition: 300ms;
    backdrop-filter: blur(5px);
    overflow: hidden;
}
.loader {
position: absolute !important;
top: calc(50% - 60px);
left: calc(50% - 60px);
 animation: spin 14s linear infinite;
 width: 120px;
 height: 120px;
 position: relative;
 background-position: center;
 background-size: contain;
 background-repeat: no-repeat;
 background-image: url(${loadingplanet.src});
}

.loaderring1 {
position: absolute !important;
top: calc(50% - 73px);
left: calc(50% - 73px);
 animation: spin 2s linear infinite;
 width: 146px;
 height: 146px;
 position: relative;
 background-position: center;
 background-size: contain;
 background-repeat: no-repeat;
  animation-direction: reverse;
 background-image: url(${loadingring1.src});
}

.loaderring2 {
position: absolute !important;
top: calc(50% - 88px);
left: calc(50% - 88px);
 animation: spin 2s linear infinite;
 width: 176px;
 height: 176px;
 position: relative;
 background-position: center;
 background-size: contain;
 background-repeat: no-repeat;
 background-image: url(${loadingring2.src});
}

@keyframes spin {
 0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }
 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }
}`;
