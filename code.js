// Function to validate inputs and check for palindrome
function validateAndCheckPalindrome() {
    // Get user inputs
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    const input = document.getElementById("palindromeField").value.trim();

    // Get elements for displaying messages
    const validationMessage = document.getElementById("validationMessage");
    const palindromeResults = document.getElementById("palindromeResults");

    // Clear previous messages
    validationMessage.innerHTML = "";
    palindromeResults.innerHTML = "";

    // Combine first and last name
    const fullName = `${firstName} ${lastName}`;

    // Validate full name length
    if (fullName.length > 20) {
        validationMessage.innerHTML = "Your full name is too long! Please keep it under 20 characters.";
        return false; // Prevent form submission
    }

    // Validate zip code (must be exactly 5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
        validationMessage.innerHTML = "Invalid zip code! Please enter exactly 5 digits.";
        return false; // Prevent form submission
    }

    // Validate palindrome input
    if (!input) {
        validationMessage.innerHTML = "Please enter a word to check for palindrome.";
        return false; // Prevent form submission
    }

    // Check if the input is a palindrome
    const isPalindrome = checkPalindrome(input);

    // Display the palindrome result
    if (isPalindrome) {
        palindromeResults.innerHTML = "This is it, Chief! Your input is a palindrome.";
    } else {
        palindromeResults.innerHTML = "This actually ain't it, Chief! Your input is not a palindrome.";
    }

    return false; // Prevent form submission
}

// Function to check if a string is a palindrome
function checkPalindrome(input) {
    const stringLength = input.length;
    const iterationCount = Math.floor(stringLength / 2);
    const lastCharacterIndex = stringLength - 1;

    for (let i = 0; i < iterationCount; i++) {
        if (input[i] !== input[lastCharacterIndex - i]) {
            return false; // Not a palindrome
        }
    }
    return true; // Is a palindrome
}