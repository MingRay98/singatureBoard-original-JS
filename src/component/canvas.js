let globalCanvas;
let globalCtx;
let x, y;
let drawing;

export const removeElements = () => {
  let oldCanvas = document.getElementById("signatureCanvas");
  oldCanvas && oldCanvas.remove();
  globalCanvas = null;
  globalCtx = null;

  let button = document.getElementById("build");
  button && button.remove();
};

export const createCanvas = (width, height) => {
  let canvas = document.createElement("canvas");
  canvas.id = "signatureCanvas";
  canvas.width = width;
  canvas.height = height;
  canvas.style.zIndex = 8;
  canvas.style.border = "1px solid";
  return canvas;
};

export const getGlobalCanvas = () => {
  globalCanvas = document.getElementById("signatureCanvas");
  globalCtx = globalCanvas.getContext("2d");

  globalCanvas.addEventListener("mousedown", addDrawPoint);
  globalCanvas.addEventListener("mousemove", drawLine);
  globalCanvas.addEventListener("mouseup", stopDrawing);
  globalCanvas.addEventListener("mouseout", stopDrawing);
};

const addDrawPoint = event => {
  drawing = true;
  x = event.offsetX;
  y = event.offsetY;
};

const drawLine = event => {
  if (drawing) {
    globalCtx.lineWidth = 3;
    globalCtx.beginPath();
    globalCtx.moveTo(x, y);
    globalCtx.lineTo(event.offsetX, event.offsetY);
    globalCtx.stroke();
    x = event.offsetX;
    y = event.offsetY;
  }
};

const stopDrawing = event => {
  drawing = false;
};
