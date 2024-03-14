export const loader = `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  display: block;
  overflow-y: hidden;
  overflow-x: hidden;
}

#globalLoader {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #0d1117;
  left: 0;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  transition: 300ms;
  backdrop-filter: blur(5px);
  overflow: hidden;
}

.loader {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  animation: spin 1.5s linear infinite;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  opacity: 0.5;
  background-image: linear-gradient(90deg, #b721ff88 0%, #6625ff88 50%, #257cff88 100%);
}

.loader .loader-inside {
  position: absolute;
  top: 7px;
  left: 7px;
  width: 86px;
  height: 86px;
  border-radius: 45px;
  background-image: linear-gradient(90deg, #b721ff 0%, #6625ff 50%, #257cff88 100%);
}

.loaderring {
  position: absolute !important;
  top: calc(50% - 70px);
  left: calc(50% - 70px);
  border-radius: 50%;
  animation: spin 1.6s linear infinite;
  animation-direction: reverse;
  width: 140px;
  height: 140px;
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
}
`
