const renderHistory = () => {
  const container = document.querySelector(".container-list-operations");

  HistoryGlobal.map((operation) => {
    const itemOperation = createLi("operation-item");
    const operationElement = createH1("operation");
    const responseElement = createH1("response");

    operationElement.innerHTML = operation[0];
    responseElement.innerHTML = `= ${operation[operation.length - 1]}`;

    itemOperation.appendChild(operationElement);
    itemOperation.appendChild(responseElement);

    container.appendChild(itemOperation);
  });
};

const removeRenderHistory = () => {
  const container = document.querySelector(".container-list-operations");

  container.innerHTML = "";
};
