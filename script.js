// Function to convert Marla to Square Feet
function convertToSquareFeet(marla) {
    // 1 Marla = 272.25 Square Feet (Standard Conversion)
    return marla * 272.25;
}

// Function to handle form submission
document.getElementById('areaConverterForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the value from the Marla input
    const marlaValue = parseFloat(document.getElementById('marla').value);

    // Check if the input is a valid number
    if (!isNaN(marlaValue)) {
        // Perform the conversion
        const squareFeetValue = convertToSquareFeet(marlaValue);

        // Display the result with two decimal places
        document.getElementById('result').innerHTML = `${marlaValue} Marla is equal to ${squareFeetValue.toFixed(2)} Square Feet.`;
    } else {
        // Display an error message if the input is not a valid number
        document.getElementById('result').innerHTML = 'Please enter a valid number for Marla.';
    }
});
