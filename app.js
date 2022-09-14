"use strict";
let character = document.querySelectorAll("input");
let inputString = "";
const obj = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9",
    " _ |_|| |   ": "A",
    "    _ |_||_|": "B",
    "    _ |  |_ ": "C",
    " _ | || ||_|": "D",
    "    _ |_ |_ ": "E",
    "    _ |_ |  ": "F",
    "    _ |_ |_|": "G",
    "      |_|| |": "H",
    "       |  | ": "I",
    "       | _| ": "J",
    "      |/ |\\ ": "K",
    "      |  |_ ": "L",
    "": "M",
    " ": "N",
    "    _ | ||_|": "O",
    "    _ |_||  ": "P",
    "    _ | ||\\|": "Q",
    " _ |_|| \\   ": "R",
    "    _ |_  _|": "S",
    "       _  | ": "T",
    "      | ||_|": "u",
    "   ": "V",
    "    ": "w",
    "\\ / | / \\   ": "X",
    "\\ / \\ /     ": "y",
    "   _   / /_ ": "Z",
};
window.onload = () => {
    character.forEach(ele => {
        ele.addEventListener("keypress", (event) => {
            let str = "|_|?";
            if (!str.includes(event.key)) {
                alert("Wrong input");
                event.preventDefault();
            }
        });
    });
};
function wordCreation(e) {
    character.forEach(item => {
        if (item.value == "") {
            inputString += " ";
        }
        else {
            inputString += item.value;
        }
    });
    if (inputString in obj) {
        let outputString = obj[inputString];
        console.log(outputString);
        document.querySelector("#display").style.display = "block";
        document.querySelector('#display').innerText = outputString;
    }
    else {
        alert("DRAW EXACT WORD");
    }
    inputString = "";
}
function reset() {
    document.querySelector('#display').innerText = "";
    document.querySelector("#display").style.display = "none";
    character.forEach(i => {
        i.value = "";
    });
}
