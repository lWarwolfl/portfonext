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
  background-color: #0a0a0b;
}

#globalLoader {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #0a0a0b;
  left: 0;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  transition: opacity 300ms ease;
  overflow: hidden;
}

.loader {
  width: 72px;
  height: 1px;
  background-color: #232327;
  overflow: hidden;
}

.loader .loader-inside {
  display: block;
  width: 40%;
  height: 100%;
  background-color: #4c8dff;
  animation: slide 1.1s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(250%);
  }
}
`
