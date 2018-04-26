# Quranic Teacher Assistant
A Quran eacher companion, assisting database, to help assigning ayahs to children based on their memorization capacity.

## Idea
this library will utilize the flow theory and mimic agile burn charts per students, by defining difficulty score per ayah based on number of words.

## Attribution
This project is based on data collected from:
 * [Tanzil](http://tanzil.net)
 * [Every Ayah](http://everyayah.com)
 
## Deployed example 
You can find a running example on [Heroku](https://radiant-castle-28899.herokuapp.com/api/surah/1)

to search for a whole surah use the url
`https://radiant-castle-28899.herokuapp.com/api/surah/1` 

you can replace the number `1` with any number from 1 to 114

to search for a specific ayah within a surah use the url `https://radiant-castle-28899.herokuapp.com/api/surah/2/ayah/3`

you can replace ayah number with any valid number in that surah 

### Note
No error handling yet 