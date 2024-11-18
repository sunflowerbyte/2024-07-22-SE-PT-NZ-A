import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  function calculate() {
    let calculation;
    switch (operator) {
      case "+":
        calculation = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        calculation = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        calculation = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        calculation = num2 !== 0 ? parseFloat(num1) / parseFloat(num2) : "Error: Division by zero";
        break;
      default:
        calculation = "Invalid operator";
    }
    setResult(calculation);
  }

  return (
    <div>
      <h2>Basic Calculator</h2>
      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Operator:
          <select value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </label>
      </div>
      <button onClick={calculate}>Calculate</button>
      <div>
        <h3>Result: {result !== null ? result : "No calculation yet"}</h3>
      </div>
    </div>
  );
}

export default Calculator;
