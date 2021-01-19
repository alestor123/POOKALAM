var chalk = require('chalk'),
fs = require('fs'),
figlet = require('figlet'),
poo = fs.readFileSync('./poov','utf8');
figlet('Happy Onam',(err,data) => {
console.log(chalk.green(data) + '\n')
console.log(poo) 
})