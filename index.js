import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "please enter sentence or paragraph we count word:"
});
const word = answer.Sentence.trim().split(" ");
console.log(`your sentence word count is ${word.length}`);
