// Reusable functions

// For each, taking the array and returning sum
function jSumArrayAlt(numbers) {
  let jSum = 0;
  numbers.forEach((jNum) => (jSum += jNum)); // Corrected variable name (jSum)
  return jSum;
}

// Taking array numbers and returning the average using for loop
function jAverageArrayAlt(numbers) {
  let jSum = 0; // Use jSum consistently
  for (let j = 0; j < numbers.length; j++) {
    jSum += numbers[j];
  }
  return numbers.length > 0 ? jSum / numbers.length : 0;
}

// Longest string in array
function jLongestStringAlt(strings) {
  let jLongest = "";
  for (let j = 0; j < strings.length; j++) {
    if (strings[j].length > jLongest.length) {
      jLongest = strings[j];
    }
  }
  return jLongest;
}

// Filter strings longer than a given length
function jStringsLongerThanAlt(strings, jLength) {
  const result = [];
  for (let i = 0; i < strings.length; i++) {
    const jStr = strings[i].trim(); // Clean up any spaces
    if (jStr.length > jLength) {
      result.push(jStr);
    }
  }
  return result;
}

// Print numbers recursively
function jPrintNumbersAlt(jNum) {
  if (jNum > 0) {
    jPrintNumbersAlt(jNum - 1); // Recursive call
    console.log(jNum); // Print the number
  }
}

// Testing output
console.log(
  "Take an array of numbers and return the sum. " +
    jSumArrayAlt([10, 20, 30, 40])
); // 100
console.log(
  "Take an array of numbers and return the average. " +
    jAverageArrayAlt([10, 20, 30, 40])
); // 25
console.log(
  "Take an array of strings and return the longest string.  " +
    jLongestStringAlt(["dog", "elephant", "cat"])
); // elephant
console.log(
  "Take an array of strings, and a number and return an array of the strings that are longer than the given number. " +
    jStringsLongerThanAlt(["this", "is", "a", "simple", "test"], 2)
); // ["this", "simple", "test"]
console.log(
  "Take a number, n, and print every number between 1 and n without using loops. Use recursion. " +
    jPrintNumbersAlt(5)
); //not working

/////////
// Sample data
const jPeople = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];


//1-sorting by age
const jSorteByAge=jPeople.sort((a,b)=>a.age-b.age);
console.log("Sorted by age: " + jSorteByAge);
