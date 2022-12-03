/**
 * @param {number} expected Response of the expected function.
 * @param {Function} callBack Function to validate response.
 * @param {any} params Parameters passed to the function.
 * @returns {boolean} If what was expected was met
 */
const testingFunction = (expected, callBack, ...params) => {
  let response = callBack(...params);
  let valid = response === expected ? true : false;
  let text = valid ? "✅ Test approved" : "❌ test rejected";

  console.log("------- Parameters -------");
  for (let i of params) console.log(i);
  console.log("------- Response -------");
  console.log(`respuesta: ${expected} -> ${response}`);
  console.log(text);

  return valid;
};

module.exports = { testingFunction };
