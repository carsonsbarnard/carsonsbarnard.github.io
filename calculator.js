// calculator.js
(function() {
  const calcResults = [];
  let rows = '';

  // Building table
  document.write('<p style="text-align:center;">Calculation Table')
  document.write('<table>');
  document.write('<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>');

  while (true) {
    const xInput = prompt('Enter the first number (x):');
    if (xInput === null) break;

    const yInput = prompt('Enter the second number (y):');
    if (yInput === null) break;

    const op = prompt('Enter an operator (+, -, *, /, %):');
    if (op === null) break;

    let result;
    const x = parseFloat(xInput);
    const y = parseFloat(yInput);

    // Basic error checking for non-allowed inputs
    if (isNaN(x) || isNaN(y)) {
      result = 'Error: non-numeric input';
    } else {
      switch (op) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/':
          result = y === 0 ? 'Error: divide by zero' : x / y;
          break;
        case '%':
          result = y === 0 ? 'Error: modulo by zero' : x % y;
          break;
        default:
          result = 'Error: invalid operator';
      }
      if (typeof result === 'number') calcResults.push(result);
    }

    // Append data into row
    rows += `<tr>
      <td>${xInput}</td>
      <td>${op}</td>
      <td>${yInput}</td>
      <td>${result}</td>
    </tr>`;
  }

  // Write rows using document.write, as seen in example code
  document.write(rows);
  document.write('</table>');

  // Builds summary rows
  if (calcResults.length) {
    const total = calcResults.reduce((a,b) => a + b, 0);
    const min = Math.min(...calcResults);
    const max = Math.max(...calcResults);
    const avg = total / calcResults.length;

    document.write('<p style="text-align:center;">Summary Table')
    document.write('<table>');
    document.write('<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>');
    document.write(`<tr>
      <td>${min}</td>
      <td>${max}</td>
      <td>${avg.toFixed(2)}</td>
      <td>${total}</td>
    </tr>`);
    document.write('</table>');
  } else {
    document.write('<p style="text-align:center;">No valid computations!</p>');
  }
})();