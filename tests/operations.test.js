const { testingFunction } = require("./test.test");
const { Operations } = require("../js/logic/operations");

const operation = new Operations();

testingFunction(3, operation.MainSolveOperation, "1 + 2");
