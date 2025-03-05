///reusable functions
//for each takeing the array and returning sum
function jSumArrayAlt(numbers) {
    let jSum = 0;
    numbers.forEach(jNum => jSum += jNum);  // Corrected variable name (jSum)
    return jSum;
  }
  
//taking array numbers and return teh avarage using for
function jAverageArrayAlt(numbers) {
    let jSum = 0;  // Use jSum consistently
    for (let j = 0; j < numbers.length; j++) {
      jSum += numbers[j];
    }
    return numbers.length > 0 ? jSum / numbers.length : 0;
  }
  
//longest string in arrray
function jLonestStringAlt(strings){
    let jLongest='';
    for (let j=0;j<strings.length;j++){
        if(strings[j].length>jLongest.length){jLongest=strings[j];}
    }
    return jLongest;
}
//Filter strings longer than a given length:
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
  //Print numbers recursively print numbers
  function jPringNumbersAlt(jNum){
    if(jNum>0){jPrintNumbersAlt(jNum-1);
        console.log(jNum);
    }
  }

  ///testing output
  console.log(jSumArrayAlt([10, 20, 30, 40])); 
console.log(jAverageArrayAlt([10, 20, 30, 40])); 
console.log(jLongestStringAlt(['dog', 'elephant', 'cat']));
console.log(jStringsLongerThanAlt(['this', 'is', 'a', 'simple', 'test'], 2)); 
