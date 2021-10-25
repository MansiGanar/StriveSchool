/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sum(x, y) {
  if (x == y) {
    return 3 * (x + y);
  } else {
    return x + y;
  }
}
console.log(sum(5, 4));
console.log(sum(2, 2));

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

function checkTwoIntegers(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(checkTwoIntegers(50, 50));
console.log(checkTwoIntegers(24, 50));

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

/* 4. Create a function to find and return the largest of three given integers. */
function threeMaxNumbers(x, y, z) {
  max_val = 0;
  if (x > y) {
    max_val = x;
  } else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z;
  }
  return max_val;
}

console.log(threeMaxNumbers(3, 5, 3));
console.log(threeMaxNumbers(0, 1, 20));
console.log(threeMaxNumbers(489, 222, 700));

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
      Return `true` if they do, return `false` if one (or both) don't. */
function rangeOfNumbers(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(rangeOfNumbers(28, 57));
console.log(rangeOfNumbers(45, 87));
console.log(rangeOfNumbers(55, 87));

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
      Pass the string and the number of copies as parameters. */

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
      Pass the city name as a parameter. Return `false` if they start with a different string. */

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
      Pass the array as a parameter. */

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
      Return `true` is it does, `false` if it doesn't. */

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
      Return `true` if it doesn't, `false` if it does. */

/* 11. Create a function to find the longest string from a given array of strings. 
      Pass the array as parameter and return the longest string. */

function LongestgivenWord(arrayOfWords) {
  let longestWord = "";

  arrayOfWords.forEach(function (theword) {
    if (theword.length > longestWord.length) {
      longestWord = theword;
    }
  });

  return longestWord;
}

let theword = LongestgivenWord(["My", "Name", "is", "Mansi Ganar"]);
console.log(theword);

/* 12. Create a function to find the types of a given angle:
    1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
      2. Right angle â‡’ 90 degree. Return `right`
      3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
      4. Straight angle â‡’ 180 degrees. Return `straight`
      Pass the angle as a parameter.
  */
function angleName(angle) {
  if (angle < 90) {
    return "Acute angle.";
  }
  if (angle === 90) {
    return "Right angle.";
  }
  if (angle < 180) {
    return "Obtuse angle.";
  }
  return "Straight angle.";
}

console.log(angleName(47));
console.log(angleName(90));
console.log(angleName(145));
console.log(angleName(180));

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
      Return `true` if that's the case, return `false` if it's not. */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
      If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
      If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
      The number has 3 as a factor â‡’ return `Diego`
      The number has 5 as a factor â‡’ return `Riccardo`
      The number has 7 as a factor â‡’ return `Stefano`
      If the number does not have 3,5, or 7, return the original number. 
      âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
  Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
  Ex. British Broadcasting Corporation returns `BBC` */
