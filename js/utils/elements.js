/**
 * Create a new element div.
 * @param {String} className String to class of element
 * @returns New element div
 */
const createDiv = (className) => {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", className);
  return newDiv;
};

/**
 * Create a new element button.
 * @param {String} className String to class of element.
 * @returns New element button
 */
const createButton = (className) => {
  let newButton = document.createElement("button");
  newButton.setAttribute("class", className);
  return newButton;
};

/**
 * Create a new element li.
 * @param {String} className String to class of element.
 * @returns New element li
 */
const createLi = (className) => {
  let newLi = document.createElement("li");
  newLi.setAttribute("class", className);
  return newLi;
};

/**
 * Create a new element h1.
 * @param {String} className String to class of element.
 * @returns New element h1
 */
const createH1 = (className) => {
  let newH1 = document.createElement("h1");
  newH1.setAttribute("class", className);
  return newH1;
};
