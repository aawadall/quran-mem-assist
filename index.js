const chalk = require('chalk');
const express = require('express');
const api = require("./api/get-data");

const thisPackage = require('./package.json');

const port = 80;

    // Server 
    const app = express();
    
    // Router 
    const defaultRouter = express.Router();
    const ayahRouter = express.Router();
    
    // Default Router 
    defaultRouter.get('/:id', (req, res, next) => {
        res.json({message: {query: req.query}});
        console.log(req.query);
        res.end();
    });

    // Link Router to methods
    // General Ayah Difficulty
    ayahRouter.get('/difficulty', (req,res) => {
        if (req.query.ayah) {
            res.json (api.getDifficulty(req.query.ayah));
            res.end();
        }
        res.json({ message: 'missing Ayah number'});
        res.end();
    });

    // General Ayah Details
    ayahRouter.get('/', (req,res) => {
        if (req.query.ayah) {
            res.json (api.getAyah(req.query.ayah));
            res.end();
        }
       res.json({ message: 'missing Ayah number'});
       res.end();
    });

    // Start Server
    console.log(chalk.blue(`Starting ${chalk.bold('QURAN MEMORY ASSISTANT')} version ${thisPackage.version}`));


    app.use('/ayah', ayahRouter);
    app.use('/', defaultRouter);

    app.listen(port);
    console.log(chalk.blue(`Listining @ port ${chalk.bold(port)}`));


    module.exports = app;