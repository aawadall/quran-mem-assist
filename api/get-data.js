const ayahs = require('../data/ayahs.data');
/**
 * TODO: build methods to:
 *  1. return difficutlty of an ayah [done]
 *  2. given capacity, and a starting ayah, build plan
 *  3. link ayahs to surahs
 */

module.exports = {
    getDifficulty: (aIndex) => {
        // given an ayah index, get difficulty
        return ayahs[aIndex].difficulty;
    },

    getAyah : (aIndex) => {
        return ayahs[aIndex];
    },

    lookupAyah: (sIdx, aIdx) => {
        //TODO: return Ayah ID given Surah/Ayah pair
    },

    lookupSurah: (aIndex) => {
        // TODO: return surah ID
    },

    getAttribute: (aIndex, attribute) => {
        // TODO: return attribute specified
    }

};