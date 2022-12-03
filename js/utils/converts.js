/**
 * Convinate Arrays
 * @param  { ...string | ...Array } arrays Values string or array of values.
 * @returns {Array} return new Array
 */
const convinateArrays = (...arrays) => {
  let newArray = [];

  arrays.map((element) => {
    if (typeof element === string) {
      newArray.push(element);
    } else {
      element.map((item) => {
        newArray.push(item);
      });
    }
  });

  return newArray;
};
