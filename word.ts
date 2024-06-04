import inquirer from "inquirer";
import chalk from "chalk";

//display a colourfull message
console.log(chalk.bold.cyanBright("\n \t\t Code with Hafiza Asma - Word Counter" ));
console.log("=".repeat(60));


//prompt the user to enter a sentence
let answer=await inquirer.prompt([
    {
     name: "sentence",
     type: "input",
     message: "Enter a Sentence",
    }
]);
    
//triming the sentence and splittingit into word based on "space"
let words = answer.sentence.trim().split(" ");

//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Word:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));









