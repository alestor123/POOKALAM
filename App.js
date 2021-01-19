var chalk = require('chalk'),
fs = require('fs'),
figlet = require('figlet'),
data = fs.readFileSync('./poov','utf8');
figlet('Happy Onam',(err,data) => console.log(chalk.green(data)))
