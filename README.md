# Palindrome Checker

A Palindrome Checker built using HTML, CSS, and JavaScript that allows users to input text or numbers and check if the input is a palindrome, which reads the same forward and backward. This project is responsive and designed to work seamlessly on both desktop and mobile devices.

## Features
Palindrome Detection: Checks if an alphanumeric string is a palindrome, considering case insensitivity and ignoring spaces, punctuation, or special characters.
Responsive Design: The layout is fully responsive, adjusting to desktop, tablet, and mobile screen sizes.
Interactive User Interface: Displays whether the input is a palindrome and includes dynamic error handling.

## Technologies Used
HTML5: Provides the structure of the web page.
CSS3: Styles the page, ensuring mobile responsiveness with media queries.
JavaScript: Implements the palindrome-checking functionality and event handling.

## Getting Started
Follow the instructions below to set up the project locally:

### Prerequisites
A browser (Google Chrome, Firefox, Safari, etc.)
A text editor (VS Code, Sublime Text, etc.)

### Installation
  - Clone or download the project files to your local machine.
  - Open the index.html file in a web browser to view the project.

  ```bash
git clone https://github.com/CyberBeeDesign/palindrome-checker.git
cd palindrome-checker
open index.html
```

  - Open the project in your favorite code editor to make modifications or improvements.

## How It Works

### User Interaction
 - Input Field: The user can type any text or number into the input box.
 - Check Button: After clicking the "Check" button, the input is validated to see if it is a palindrome.
 - Result Display: The result is displayed dynamically on the page, indicating whether the input is a palindrome or not.

### JavaScript Palindrome Check
The function isAlphanumericPalindrome(str) cleans the input by:
  - Removing non-alphanumeric characters (e.g., punctuation, spaces).
  - Converting the string to lowercase for case insensitivity.
  - Comparing the cleaned string to its reversed version.
  - If the string is the same forward and backward, it is identified as a palindrome.

### Mobile Responsiveness
The project uses CSS media queries to adjust the layout for various screen sizes:
  - On mobile (less than 480px width), the content adapts to ensure readability and usability, with margins on the sides and text properly aligned.
  - On tablet (up to 1024px), the layout adjusts to ensure it looks great on medium screens.

### Example Input
Here are some common examples of palindromes:
  - "racecar" → Palindrome
  - "A man, a plan, a canal, Panama" → Palindrome (ignores spaces and punctuation)
  - "hello" → Not a palindrome

## Code Structure
```bash
/palindrome-checker
│
├── index.html         # Main HTML file with structure
├── style.css          # CSS file with styles and responsive design
├── script.js          # JavaScript file with palindrome logic and interactivity
├── Resources/
│   └── Palindrome Logo.png   # Image file used for the logo
└── README.md          # This file, providing project details
```

