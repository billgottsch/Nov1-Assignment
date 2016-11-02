/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b) {
    if (isNaN(a) && isNaN(b)) {
      return NaN;
    } else if (isNaN(a)){                       // ----DONE----
        return b;
      } else if ( isNaN(b)) {
        return a;
      }else{
        return Math.max(a,b);
      }
    }


console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
      if (isNaN(a) && isNaN(b) && isNaN(c)){
        return NaN;
      } else if ( isNaN(a) && isNaN(b)) {         //----DONE----
        return c;
      } else if ( isNaN(a) && isNaN(c)) {
        return b;
      } else if ( isNaN(b) && isNaN(c)) {
        return a;
      } else if (isNaN(a)) {
        return Math.max(b,c);
      } else if (isNaN(b)) {
        return Math.max(a,c);
      } else if (isNaN(c)) {
        return Math.max(a,b);
      } else {
        return Math.max(a,b,c);
      }
    }
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char) {
  if (!isNaN(char)){
    return false;
  } else if (char.length !== 1) {
    return false;                                 // ----DONE----
  } else {
    var vowels = "aeiouAEIOU";
    var isVowel = vowels.indexOf(char) >= 0 ? true : false;
    return isVowel;
  }
}
console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

 //Having troubles trying to figure out where to put and how to word
 // the "if" statement
 //where I ask it if(text ==== NaN) it moves on with the rest of the function
 //else - it stops and spits out the number.


  function rovarspraket(words) {
      var output = '';
      words.toString().split('').forEach(function(character) {
      if (isNaN(parseInt(character)) === false) {
          output = output + character;
      } else if (isVowel(character) === true) {
          output = output + character;
      } else {
          output = output + character + 'o' + character;
      }
    })
      return output;
  }
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4                           -----------------------------------------
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  return str.split("").reverse().join("");      // -----DONE------
}


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")
/**
 * Part 5                              -------------------------------------
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
  var sentenceSplit = sentence.split(/\W+/);
  var longestWord = '';
  for(var i = 0; i < sentenceSplit.length; i++){
    if(sentenceSplit[i].length > longestWord.length){     //-----DONE----
	     longestWord = sentenceSplit[i];
     }
   }
  return longestWord;
  }

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
