const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isAlphanumericPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function isPalindrome(str) {
    let cleanedStr = str.replace(/\s/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}



checkButton.addEventListener("click", () => {
    const text = textInput.value.trim();

    if(text === "") {
        alert("Please input a value");
        return; // Stop execution if input is empty
    } 
    
    if (isPalindrome(text) ||
    isAlphanumericPalindrome(text)
) {
        result.textContent =`'${text}' is a palindrome`;
        result.style.display = "block";
    } else {
        result.textContent =`'${text}' is not a palindrome`;
        result.style.display = "block";
    }
});


