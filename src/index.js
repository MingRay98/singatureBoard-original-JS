import input, { createButton } from "./component/input";
import * as canvasTool from "./component/canvas";
import "../src/styles.css";

let cButton;
let app;

const download = () => {
  const link = document.createElement("a");
  link.download = "signature.png";
  link.href = document.getElementById("signatureCanvas").toDataURL();
  link.click();
};

const getInputValue = id => {
  const value = document.getElementById(id).value;
  return value;
};

const clickCreate = () => {
  canvasTool.removeElements();
  app.appendChild(
    canvasTool.createCanvas(
      getInputValue("widthInput"),
      getInputValue("heightInput")
    )
  );
  canvasTool.getGlobalCanvas();
  app.appendChild(createButton("build Signature", "build"));
  let downloadButton = document.getElementById("build");
  downloadButton.addEventListener("click", () => download(), false);
};

const init = () => {
  app = document.getElementById("app");
  console.log(app);
  console.log(input);
  app.appendChild(input);
  cButton = document.getElementById("enter");
  cButton.addEventListener("click", () => clickCreate(), false);
};

document.body.addEventListener("onload", init(), false);
