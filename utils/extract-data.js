//const surahs = require('./data/surahs.json');
const chalk = require('chalk');

//const quranMetaData = require('./data/quran-data');


const fs = require('fs');
const inputFile = './data/quran-simple-clean.txt';
const dataFile = './data/ayahs.data.json';

function fillData(inputFile, callback){

    fs.readFile(inputFile, (err, data) => {

        if(err) {
            console.log(err);
        }
        callback(err, data);
    });

}
module.exports = () => {

    let ayahs = [];

    fillData(inputFile, (err, data) => {
        if (err) throw err;
        const sliced = data.toString().split("\n");
        sliced.forEach((slice, index) => {
            //console.log(`${index} : ${slice},`);
            if (index < 6236) {
                let words = slice.replace("\r","").split(" ");
                const ayah = {
                    id: index,
                    text : slice.replace("\r",""),
                    words: words,
                    difficulty: words.length
                };

                ayahs.push(ayah);
            }

        });

        console.log(chalk.bold.blue(
            "**************************************************************\n" +
            "**************************************************************\n" +
            "About to write data file"));
        fs.writeFile(dataFile, JSON.stringify(ayahs),'utf8',(err) => {
            if(err){
                console.log(chalk.red(err));
            }
            console.log(chalk.green('success'));
        });
        console.log(ayahs[6236]);
    });




};