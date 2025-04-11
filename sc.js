// Clear the input
function clearResult() {
    document.getElementById('result').value = '';
}

// Add numbers to the input field
function anum(number) {
    document.getElementById('result').value += number;
}

// Add operator, but prevent consecutive operators
function apo(operator) {
    const currentResult = document.getElementById('result').value;
    const lastChar = currentResult.charAt(currentResult.length - 1);

    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
        document.getElementById('result').value += operator;
    }
}

// Add decimal point but prevent multiple decimals
function adot() {
    const currentResult = document.getElementById('result').value;
    const lastChar = currentResult.charAt(currentResult.length - 1);

    if (!currentResult.includes('.') && !isNaN(lastChar)) {
        document.getElementById('result').value += '.';
    }
}

// Evaluate and display result
function calresult() {
    const currentResult = document.getElementById('result').value;

    try {
        const result = eval(currentResult);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Handle keyboard inputs
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (!isNaN(key)) {
        anum(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        apo(key);
    } else if (key === '.') {
        adot();
    } else if (key === 'Enter') {
        calresult();
    } else if (key === 'Backspace') {
        let currentResult = document.getElementById('result').value;
        document.getElementById('result').value = currentResult.slice(0, -1);
    } else if (key === 'Escape') {
        clearResult();
    }
});
