# CSC 317 Assignment 4 Submission

**Name:** Arianna Lansang
**Student ID:** 903307512  
**GitHub Username:** arianna-lnsng  
**Assignment Number:** 4


##  Assignment 4: The Exciting World of JavaScript

## Links
portfolio: https://arianna-lnsng.github.io/CSC317/ 
calcualtor: https://arianna-lnsng.github.io/CSC317/assignments/assignment-4/calculator.html



## Description:
The objective of this assignment to was to get into JavaScript and learn how to implement interactivity to certain elements of a webpage



## Approach / What I Did:
I started by following the instructions for the assignment as outlined in the README.md file for the project and went from there. I started the HTML, then the CSS, then finally the JavaScript. I didn't finish them one by one. I ended up going back and forth a lot.



## Code Explanation:
I used the same theme switcher from assignment 3, and just adjusted it a bit.  I added hover elements other basic styling for calculator0.css. I did have to read back up on grid layouts because I forgot. The rest were AI generated using Claude and ChatGPT. I still haven't figured out responsive design, but I am fine with how my assignment turned out.
```css
/* Button grid */
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 65px);
    gap: 10px;
    padding: 20px;
}
```

```css
.operator:hover {
    background-color: #e28a00;
}
```

I tried a bit with the JavaScript. I'd added functionality to the buttons by id, but the most important part was from the secureEval() function that was in the Discord.

I'd added the keyboard functionality at the end. I'd used a switch statement to handle keyboard strokes and figured things out from there. I did some, then I ran it through AI to fix and add things. I used my resources and gained a greater understanding of JavaScript and how the frontend interacts with other code.

```js
switch (event.key) {
    case '+': document.getElementById('add').click(); break;
    case '-': document.getElementById('subtract').click(); break;
    case '*':
    case 'x':
    case 'X': document.getElementById('multiply').click(); break;
    case '/': document.getElementById('divide').click(); break;
    case '%': document.getElementById('percentage').click(); break;
    case '.': document.getElementById('decimal').click(); break;
    case 'Enter':
    case '=':
        event.preventDefault();
        document.getElementById('equals').click();
        break;
    case '(':
    case ')':
        currentExpression += event.key;
        outputElement.textContent = currentExpression;
        break;
    case 'Escape':
    case 'c':
    case 'C': document.getElementById('clear').click(); break;
    case 'Backspace':
        if (currentExpression.length > 0) {
            currentExpression = currentExpression.slice(0, -1);
            outputElement.textContent = currentExpression || "0";
        }
        break;
}
```

I ended up doing the memory buttons last. I basically went through the same process. I added the buttons to he HTML, added styling, then functionality.