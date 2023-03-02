function isPalindrome(word) {
  if (word === word.split("").reverse().join("")) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  if string = stringBackwards:
    return true
  else:
    return false
*/

/*
  Add written explanation of your solution here
  If inputed word is equal to itself backwards the function returns true if it is not equal to itself backwards
  the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
