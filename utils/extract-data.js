/* TODO:
*   1. Define each ayah belonging to what Surah
*   2. Define reverse references, from surahs to ayahs
*   3. correct off by 1 for ayah index
*   4. Add references to http://everyayah.com/data/Husary_128kbps_Mujawwad/ for each ayah
*   5. Add references to http://www.everyayah.com/data/QuranText_jpg/ for each ayah
*   6. Define universal attribute collection method
*   7. define calculate plan method
* */
const quranData = require('../data/quran-data');
const chalk = require('chalk');
const fs = require('fs');

function buildAyahs(inputFile, callback) {
    let ayahs = [];

    fillData(inputFile, (err, data) => {
        if (err) throw err;
        const sliced = data.toString().split("\n");
        console.log(chalk.yellow('pre-ayah iteration'));
        sliced.forEach((slice, index) => {
            //console.log(chalk.yellow(`Ayah [${index}]`));
            if (index < 6236) {
                let words = slice.replace("\r", "").split(" ");
                const ayah = {
                    id: index,
                    text: slice.replace("\r", ""),
                    words: words,
                    difficulty: words.length
                };
                ayahs.push(ayah);
            }
        });
        console.log(chalk.bold.blue("Completed Ayah object"));
        callback(ayahs);
    });
}

function fillData(inputFile, callback){
    fs.readFile(inputFile, (err, data) => {
        if(err) {
            console.log(err);
        }
        callback(err, data);
    });
}

const buildData = (inputFile, dataFile) => {
    const zeros = '000';
    // Construct Ayah metadata

    buildAyahs(inputFile, (ayahs) => {

        // construct Surah metadata
        let surahs = [];
        quranData.Sura.forEach((surah, index) => {
            t_surah = {
                id: index,
                name: {
                    english: surah[5],
                    arabic: surah[4]
                },
                ayahs: []
            };

            console.log(JSON.stringify(t_surah));

            if (t_surah.id < 115) {
                for (let i = surah[0]; i < surah[1] + surah[0]; i++) {
                    t_ayah = ayahs[i];


                    // amend record
                    t_ayah.id -= surah[0];
                    const formatted_surah = (zeros + t_surah.id).substr((zeros + t_surah.id).length - zeros.length);
                    const formatted_ayah = (zeros + t_ayah.id).substr((zeros + t_ayah.id).length - zeros.length);
                    t_ayah.audio = `http://everyayah.com/data/Husary_128kbps_Mujawwad/${formatted_surah}${formatted_ayah}.mp3`;
                    t_ayah.text_png = `http://www.everyayah.com/data/quranpngs/${t_surah.id}${t_ayah.id}.png`;
                    t_surah.ayahs.push(t_ayah);
                }
                surahs.push(t_surah);
            }
        });

        // write data to file
        fs.writeFile(dataFile, JSON.stringify(surahs), 'utf8', (err) => {
            if(err){
                console.log(chalk.red(err));
            }
            console.log(chalk.green('success'));
        });
    });

};

const inputFile = process.argv[2];
const dataFile = process.argv[3];

buildData(inputFile, dataFile);