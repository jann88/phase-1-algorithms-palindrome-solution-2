function isPalindrome(word) {
    // Write your algorithm here
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
        const endIndex = word.length - 1 - startIndex;
        if (word[startIndex] !== word[endIndex]) {
            return false;

        }

    }
    return true;
}
/* 
  Add your pseudocode here
  palindrome a word sentence spelt the same way forward and backward
  function that compares the first letter of the word with the last letter of the word and 
  confirms if they return the sme word

*/

/*
  Add written explanation of your solution here
  to attain this i need to iterate through each letter of of each word
  to make the comparison
  making use of word.length and index position of specified letters
  if letters match going forward and backward return true
  if they don't match return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;