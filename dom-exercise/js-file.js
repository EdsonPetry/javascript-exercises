/*
    Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

    1. a <p> with red text that says “Hey I’m red!”
    2. an <h3> with blue text that says “I’m a blue h3!”
    3. a <div> with a black border and pink background color with the following elements inside of it:
        - another <h1> that says “I’m in a div”
        - a <p> that says “ME TOO!”
        - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

// Part 1 - Creating <p> tag w/ red text
const container = document.querySelector("#container");
const redText = document.createElement("p");
redText.setAttribute("style", "color: red;");
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

// Part 2 - Creating a <h3> with blue text that says "I'm a blue h3!"
const blueText = document.createElement("h3");
blueText.setAttribute("style", "color: blue");
blueText.textContent = "I'm a blue h3!";
container.appendChild(blueText);

// Part 3 - Creating a <div> with a black border and pink background color w/ elements inside
const content = document.createElement("div");
content.setAttribute("style", "border: 1px solid black; background-color: pink; padding: 10px; width: 200px;");
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!";
content.appendChild(h1);
content.appendChild(p);
container.appendChild(content);