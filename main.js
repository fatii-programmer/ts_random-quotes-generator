import inquirer from "inquirer";
// sample quotes
const quotes = [
    "Don't watch the clock; do what it does. Keep going.",
    "Do it with passion or not at all.",
    "Dream big and dare to fail.",
    "Be yourself; everyone else is already taken.",
    "Work hard, stay humble.",
    "Every moment is a fresh beginning.",
    "Stay focused and never give up.",
    "Embrace the journey, not just the destination.",
    "Life is short, make it sweet.",
    "Create your own sunshine.",
    "Happiness is an inside job.",
];
function getrandomquote() {
    const randomindex = Math.floor(Math.random() * quotes.length);
    return quotes[randomindex];
}
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'generate',
            message: 'press enter to generate a random quotes',
        },
    ]);
    if (answers.generate == '') {
        console.log('/nrandom quote: ');
        console.log(getrandomquote());
    }
    else {
        console.log('invalid input please press enter to generate a quote.');
    }
}
main();
