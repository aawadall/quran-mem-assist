const chalk = require('chalk');
const express = require('express');
const api = require("./api/get-data");

const thisPackage = require('./package.json');

const port = 3001;

    // Server 
    const app = express();
    
    // Router 
    const router = express.Router();
    
    // Link Router to methods 
    router.get('/', (req, res) => {
        res.json({ message: 'Placeholder'});
        console.log(chalk.yellow(`Incoming request: ${req.toString()}`));
        res.end();
    });
    
    router.get('/:ayah', (req,res) => {
       res.json({ message: `req`});
       console.log(chalk.yellow(`Incoming request: ${req}`));
       res.end();
    });
    // Start Server
    console.log(chalk.blue(`Starting ${chalk.bold('QURAN MEMORY ASSISTANT')} version ${thisPackage.version}`));
    app.use('/api', router);
    
    app.listen(port);
    console.log(chalk.blue(`Listining @ port ${chalk.bold(port)}`));


    module.exports = app;