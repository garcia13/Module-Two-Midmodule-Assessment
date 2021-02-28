const dice = [
    9856,
    9857,
    9858,
    9859,
    9860,
    9861
]

const numberOfDice = document.querySelector("#number-of-dice");
const rollResult = document.querySelector("#dice-para");
const dieSum = document.querySelector("#sum-para");
const ul = document.querySelector("#history-list");
const form = document.querySelector("form")
let newRollResult = ""

const diceRoller = (event) => {
    event.preventDefault();
    rollResult.textContent = "";
    let num = numberOfDice.valueAsNumber;
    let sum = 0
    for (let i = 0; i < num; i++) {
        const diceIndex = Math.floor(Math.random() * dice.length);
        rollResult.textContent += String.fromCodePoint(dice[diceIndex]);
        sum += diceIndex
    }
    dieSum.textContent = `Sum: ${sum + num}`;
    
    let oldRollResult = `${rollResult.textContent} = ${sum + num}`;
    if (newRollResult === "") {
        newRollResult.textContent = oldRollResult.textContent;
        
    const li = document.createElement("li");
    li.textContent = oldRollResult;
    ul.appendChild(li);
    }
}



form.addEventListener("submit", (diceRoller));
