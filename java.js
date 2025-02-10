function performOperation(operator) {
    let num1Input = document.getElementById("num1").value.trim();
    let num2Input = document.getElementById("num2").value.trim();
    let resultDisplay = document.getElementById("result");

    if (num1Input === "" || num2Input === "") {
        resultDisplay.innerText = "Error: Please enter numbers in both fields.";
        return;
    }

    let num1 = parseFloat(num1Input);
    let num2 = parseFloat(num2Input);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerText = "Error: Invalid input. Please enter valid numbers.";
        return;
    }

    let resultMessage;

    switch (operator) {
        case '+':
            resultMessage = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
            break;
        case '-':
            resultMessage = `The difference between ${num1} and ${num2} is ${num1 - num2}.`;
            break;
        case '*':
            resultMessage = `The product of ${num1} and ${num2} is ${num1 * num2}.`;
            break;
        case '/':
            if (num2 === 0) {
                resultMessage = "Error: Cannot divide by zero.";
            } else {
                resultMessage = `The quotient of ${num1} and ${num2} is ${num1 / num2}.`;
            }
            break;
        case '%':
            if (num2 === 0) {
                resultMessage = "Error: Cannot find remainder with zero.";
            } else {
                resultMessage = `The remainder of ${num1} divided by ${num2} is ${num1 % num2}.`;
            }
            break;
        default:
            resultMessage = "Error: Invalid operation.";
    }

    resultDisplay.innerText = resultMessage;
}