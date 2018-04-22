const surahs = require('../data/surahs');
const chalk = require('chalk');
//const QuranData = require('../data/quran-data');
const quranMetaData = require('../data/quran-data');
//const quranText = require('../data/quran-simple.txt');
//sandbox();

const fs = require('fs');
const inputFile = './data/quran-simple-clean.txt';

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
        console.log(ayahs[6236]);
    });




};