const chalk = require('chalk');
const thisPackage = require('./package.json');

const startUp = () =>{
  console.log(chalk.blue(`Starting ${chalk.bold('QURAN MEMORY ASSISTANT')} version ${thisPackage.version}`));
};


startUp();