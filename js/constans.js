/** Constant that stores all the operations performed.
 * @type {Array}
 */
const HistoryGlobal = [];

/**
 * Object with data initial.
 * @type {Object}
 * @property {String[]} values Container numbers and characters innerhit
 * @property {String[]} operators Container operators.
 */
const characters = {
  values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
  operators: ["+", "-", "x", "/"],
};

/**
 * Distribution of buttons in HTML.
 * @type {Object}
 * @property {string|number[][]} Basic Distribution of characters basic, for renderer in the HTML.
 */
const buttonLayout = {
  Basic: [
    ["AC", "/", "x", "del"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3],
    ["%", 0, "."],
    ["="],
  ],
};
