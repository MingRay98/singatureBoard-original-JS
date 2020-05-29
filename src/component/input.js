const createInput = (labelText, inputID) => {
  let widthLabel = document.createElement("label");
  let input = document.createElement("input");

  input.id = inputID;
  widthLabel.textContent = labelText;
  widthLabel.append(input);

  return widthLabel;
};

export const createButton = (buttonText, buttonID) => {
  let button = document.createElement("button");
  button.textContent = buttonText;
  button.id = buttonID;
  return button;
};

const createInputDiv = () => {
  let div = document.createElement("div");
  div.appendChild(createInput("Width: ", "widthInput"));
  div.appendChild(createInput("Height: ", "heightInput"));
  div.appendChild(document.createElement("br"));
  div.appendChild(createButton("create", "enter"));
  return div;
};

export default createInputDiv();
