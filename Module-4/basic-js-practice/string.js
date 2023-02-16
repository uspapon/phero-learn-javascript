// searching specific data inside of a string
const lyrics = "tumi bondhu kala kala ami jeno ki, boshonto kale bondhu bolte pari ni. kala kala sada sada";

// const lyricsLowerCase = lyrics.toLocaleLowerCase();
 const searchString = 'kala';
// const searchStringLowerCase = searchString.toLocaleLowerCase();
// const doesExists = lyrics.includes('pakhi');  // includs() returns true/false

const doesExists = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
console.log(doesExists);

/** -------------------------------------------
 * indexOf('xxx')
 * if false returns -1 else 0 or greater than 0
 ----------------------------------------------*/
console.log(lyrics.indexOf('kala')); 

if(lyrics.indexOf('sada') != -1){
    console.log("exists inside of the string");
}else {
    console.log("can not find it");
}

/** -------------------------------------------
 * startsWith('xxx')
 * returns true or false
 ----------------------------------------------*/
console.log(lyrics.startsWith('ami'));

/** -------------------------------------------
 * endsWith('xxx')
 * returns true or false
 ----------------------------------------------*/
 const fileName = "biodata.pdf";
 console.log(fileName.endsWith('.pdf'));

/** -------------------------------------------
 * split('---')
 * returns array
 ----------------------------------------------*/
 const parts = lyrics.split('.');  // parts every sentence
 const parts2 = lyrics.split(' '); // parts every word
 const parts3 = lyrics.search(''); // part every carecter  


 /** -------------------------------------------
 * slice(start end) and substring(start end)
 * returns splited substring
 ----------------------------------------------*/
// difference between str.slice() and str.substring() functions
let str = "Hello, World!";

console.log(str.slice(2, 5)); // "llo"
console.log(str.substring(2, 5)); // "llo"

console.log(str.slice(-12, -9)); // "llo"
console.log(str.substring(-12, -9)); // "Hel"

/** -------------------------------------------
 * concat('delimete', var)
 * returns array
 ----------------------------------------------*/
const str1 = 'hello';
const str2 = 'world';

console.log(str1.concat(' ', str2));

/** -------------------------------------------
 * join('delimeter')
 * returns array
 ----------------------------------------------*/
 const info = [
    'I am papon',
    'I am 34 years old',
    'I love to study and help people'
 ];

 const modifiedInfo = info.join('. ');
 console.log(modifiedInfo);
