import loadingplanet from '@public/image/png/loading/loadingplanet.png'
import loadingring1 from '@public/image/png/loading/loadingring1.png'
import loadingring2 from '@public/image/png/loading/loadingring2.png'

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
top: calc(50% - 50px);
left: calc(50% - 50px);
 animation: spin 2s linear infinite;
 width: 100px;
 height: 100px;
 position: relative;
 background-position: center;
 background-size: contain;
 background-repeat: no-repeat;
 background-image: url(${loadingplanet.src});
}

.loaderring1 {
position: absolute !important;
top: calc(50% - 63px);
left: calc(50% - 63px);
 animation: spin 2s linear infinite;
 width: 126px;
 height: 126px;
 position: relative;
 background-position: center;
 background-size: contain;
 background-repeat: no-repeat;
  animation-direction: reverse;
 background-image: url(${loadingring1.src});
}

.loaderring2 {
position: absolute !important;
top: calc(50% - 78px);
left: calc(50% - 78px);
 animation: spin 2s linear infinite;
 width: 156px;
 height: 156px;
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
}`
