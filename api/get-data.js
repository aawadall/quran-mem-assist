const quranData = require('../data/ayahs.data');

module.exports = {
    getDifficulty: (aIndex) => {
        // given an ayah index, get difficulty
        return quranData[aIndex].difficulty;
    },

    getAyah: function (sIndex, aIndex, callback) {
        console.log(`************************************
                     * Get Ayah: ${aIndex} from Surah ${sIndex}  *
                     *******************************************`);
        const result = quranData[sIndex].ayahs[aIndex];

        console.log(result);
        callback(quranData[sIndex].ayahs[aIndex]);
    },

    getSurah: function (sIndex, callback) {
        callback(quranData[sIndex]);
    },

    getAttribute: (aIndex, attribute) => {
        // TODO: return attribute specified
    }

};