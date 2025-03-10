import chalk from "chalk";
import logSymbols from "log-symbols";
console.log(chalk.blue.bgGreen.bold("Hello my package"));
console.log(logSymbols.success, chalk.green("Success!")); // usei as duas bibliotecas
console.log(logSymbols.warning, chalk.yellow("Warning!"));
console.log(logSymbols.error, chalk.red("Error!"));
