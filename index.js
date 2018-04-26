const chalk = require('chalk');
const express = require('express');

const api = require('./api/get-data');
const thisPackage = require('./package.json');

const port = 3000;

    // Server 
    const app = express();
    
    // Router 

    const ayahRouter = express.Router();


const dataLogger = (log) => {
    console.log(chalk.blue(log));
};
    // Link Router to methods

ayahRouter.get('/surah/:sid/ayah/:aid', (req, res) => {
    const sid = req.params.sid;
    const aid = req.params.aid - 1;
    dataLogger(`Get Ayah: ${sid}, in Surah: ${sid}`);
    api.getAyah(sid, aid, (result) => {
        dataLogger(sid);
        res.json(result);
        res.end();
    });
});

ayahRouter.get('/surah/:sid', (req, res) => {
    dataLogger(`Get Surah: ${req.params.sid}`);
    api.getSurah(req.params.sid, (result) => {
        dataLogger(JSON.stringify(result));
        res.json(result);
        res.end();
    })

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


app.use('/api', ayahRouter);


app.listen(port);
    console.log(chalk.blue(`Listining @ port ${chalk.bold(port)}`));


    module.exports = app;