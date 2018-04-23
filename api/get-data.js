const ayahs = require('../data/ayahs.data');
/**
 * TODO: build methods to:
 *  1. return difficutlty of an ayah
 *  2. given capacity, and a starting ayah, build plan
 *  3. link ayahs to surahs
 */

const getDifficulty = (aIndex) => {
  // given an ayah index, get difficulty
  return  ayahs[aIndex].difficulty;
};

