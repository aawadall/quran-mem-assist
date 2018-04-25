/* TODO:
*   1. Define each ayah belonging to what Surah
*   2. Define reverse references, from surahs to ayahs
*   3. correct off by 1 for ayah index
*   4. Add references to http://everyayah.com/data/Husary_128kbps_Mujawwad/ for each ayah
*   5. Add references to http://www.everyayah.com/data/QuranText_jpg/ for each ayah
*   6. Define universal attribute collection method
*   7. define calculate plan method
* */
const chalk = require('chalk');
const fs = require('fs');

function fillData(inputFile, callback){
    fs.readFile(inputFile, (err, data) => {
        if(err) {
            console.log(err);
        }
        callback(err, data);
    });
}
const buildData = (inputFile, dataFile) => {

    let ayahs = [];

    fillData(inputFile, (err, data) => {
        if (err) throw err;
        const sliced = data.toString().split("\n");
        sliced.forEach((slice, index) => {
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

const inputFile = process.argv[2];
const dataFile = process.argv[3];

buildData(inputFile, dataFile);