const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []


getUserInput = () => {
  return parseInt(userInput.value);
};

createAndWriteOutput = (
  operator,
  resultBeforeCalculation,
  calculationNumber
) => {
  const calculationDescription = `${resultBeforeCalculation}  ${operator}  ${calculationNumber}`;
  outputResult(currentResult, calculationDescription);
};

function add() {
  const enteredNumber = getUserInput();
  const initResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", currentResult, enteredNumber);
  logEntry = {
      operation: 'ADD',
      preresult: initResult,
      number: enteredNumber,
      result: currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntries  );
}
substract = () => {
  const enteredNumber = getUserInput();
  currentResult -= enteredNumber;
  createAndWriteOutput("-", currentResult, enteredNumber);
};

multiply = () => {
  const enteredNumber = getUserInput();
  currentResult *= enteredNumber;
  createAndWriteOutput("*", currentResult, enteredNumber);
};

devide = () => {
  const enteredNumber = getUserInput();
  currentResult /= enteredNumber;
  createAndWriteOutput("/", currentResult, enteredNumber);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
