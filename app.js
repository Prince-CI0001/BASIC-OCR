"use strict";
let character = document.querySelectorAll("input");
const obj = {
    " _ | ||_|   ": "0",
    "    _ | ||_|": "0",
    "|  |  |     ": "1",
    " |  |  |    ": "1",
    "  |  |  |   ": "1",
    "|  |        ": "1",
    " |  |       ": "1",
    "  |  |      ": "1",
    "   |  |     ": "1",
    "    |  |    ": "1",
    "     |  |   ": "1",
    "___|_||__   ": "2",
    " _  _| _|   ": "3",
    "|  ||_|  |  ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9",
    " _ |_|| |   ": "A",
    "    _ |_|| |": "A",
    "    _ |_||_|": "B",
    "    _ |  |_ ": "C",
    " _ |  |_    ": "C",
    " _ | || ||_|": "D",
    "    _ |_ |_ ": "E",
    " _ |_ |_    ": "E",
    "___|__|  |  ": "F",
    "|_ |__|_|   ": "G",
    "   |_ |__|_|": "G",
    "| ||_ || |   ": "H",
    "   | ||_ || |": "H",
    "___ | ___   ": "I",
    "   ___ | ___": "I",
    "___ | \\ |    ": "J",
    "   ___ | \\ | ": "J",
    " |  |/ |\\ | ": "K",
    "|  |/ |\\ |  ": "K",
    "|  |  |__   ": "L",
    "   |  |  |__": "L",
    "   \\ /|_|| |": "M",
    "\\ /|_|| |   ": "M",
    "\\ /|_|| || |": "M",
    "| ||\\|| \\   ": "N",
    "   | ||\\|| \\": "N",
    " _ | || | _ ": "O",
    "    _ |_||  ": "P",
    "    _ | ||\\|": "Q",
    " _ |_|| \\   ": "R",
    "    _ |_  _|": "S",
    "       _  | ": "T",
    "      | ||_|": "u",
    "\\ / _       ": "V",
    "   \\ / _    ": "V",
    "    ": "w",
    "\\ / | / \\   ": "X",
    "\\ / \\ /     ": "y",
    "___ / /__   ": "Z",
    "   ___ / /__": "Z",
};
window.onload = () => {
    character.forEach(ele => {
        ele.addEventListener("keypress", (event) => {
            let str = "|_|\\/";
            if (!str.includes(event.key)) {
                alert("Wrong input");
                event.preventDefault();
            }
        });
    });
};
function wordCreation(e) {
    let inputString = "";
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
        document.querySelector("#display").style.display = "block";
        document.querySelector('#display').innerText = outputString;
    }
    else {
        alert("DRAW EXACT WORD");
    }
}
function reset() {
    document.querySelector('#display').innerText = "";
    document.querySelector("#display").style.display = "none";
    character.forEach(i => {
        i.value = "";
    });
}
