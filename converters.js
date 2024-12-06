// Hexadecimal to binary dictionary
const hexDictionary = {
    '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
    '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
    'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101', 'E': '1110',
    'F': '1111'
};

// Converts hexadecimal to binary
function hexToBinary(input) {
    return input.split('').map(char => hexDictionary[char] || '').join('');
}

// Converts binary to decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

// Applies positional weighting
function applyPositionalWeighting(decimal) {
    const decimalString = decimal.toString();
    const length = decimalString.length;
    return decimalString
        .split('')
        .map((digit, index) => parseInt(digit) * Math.pow(16, length - index - 1));
}

// Main function to handle conversion and display results
function convertHexadecimal() {
    const hexInput = document.getElementById('hex_input').value.toUpperCase();
    const outputDiv = document.getElementById('output_div');

    if (hexInput.startsWith('0X')) {
        hexInput = hexInput.slice(2);
    }

    try {
        // Convert hexadecimal to binary
        const binary = hexToBinary(hexInput);

        // Convert binary to decimal
        const decimal = binaryToDecimal(binary);

        // Apply positional weighting
        const weighted = applyPositionalWeighting(decimal);

        // Calculate the final sum
        const sum = weighted.reduce((a, b) => a + b, 0);

        // Display results
        outputDiv.innerText = `
            Denary: ${sum}
            Binary: ${sum.toString(2)}
            Octal: ${sum.toString(8)}
        `;
    } catch (error) {
        outputDiv.innerText = `Error: Invalid input or conversion failed.`;
    }
}

// Attach event listener to the button
document.getElementById('convert_button').addEventListener('click', convertHexadecimal);
