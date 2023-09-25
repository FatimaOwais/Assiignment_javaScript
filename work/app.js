// Chapter 21 (Changing Case)
// Q1
// var allLower = userInput.toLowerCase();
// Q2
// var x = "Hello, World!";
// x = x.toLowerCase();
// console.log(x);
// Q3
// var y = "Hello, World!";
// y = y.toUpperCase();
// console.log(y);
// Q4
// var originalString = "Hello World";
// var lowerCaseString = originalString.toLowerCase();
// console.log(lowerCaseString);
// Q5
// var myArray = ["Hello", "World"];
// var lowerCaseString = myArray[0].toLowerCase();
// console.log(lowerCaseString);
// Q6
// var myString = "Hello, World!";
// var upperCaseString = myString.toUpperCase();
// alert(upperCaseString);
// Q7
// var cityName = "kaRacHi";
// var capitalCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalCityName);
// Q8

// ----------------------------------------------------------------------

// Chapter 22 - 25 (Strings)
// Q1
// var sameWords = "captain";
// var slicedResult = sameWords.slice(0, 2) + sameWords.slice(4);
// console.log(slicedResult);
// Q2
// var myString = "Hello, World!";
// var numberOfCharacters = myString.length;
// console.log(numberOfCharacters);
// Q3
// var animal = "elephant";
// var seg = animal.slice(1, 5);
// console.log(seg);
// Q4
// var myString = "This is a sample string";
// var characterCount = myString.length;
// console.log(characterCount);
// Q5
// var originalString = "This is a sample string";
// var characterCount = originalString.length;

// var slicedString = originalString.slice(1, -3);

// console.log(characterCount);
// console.log(slicedString);
// Q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
// Q7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);
// Q8
// var text = "Let's go to the movies and then go for a walk in the park.";
// var lastIndexOfGo = text.lastIndexOf("go");
// var indx = lastIndexOfGo;

// if (lastIndexOfGo !== -1) {
//   indx = lastIndexOfGo;
// } else {
//   indx = -1; 
// }
// console.log(indx);
// Q9
// Q10
// var myString = "abcde";
// var characterAtIndex2 = myString.charAt(2);
// console.log(characterAtIndex2);
// Q11
// var text = "hello, World!";
// var cha = text.charAt(9);
// console.log(cha);
// Q12
// var str = "This is a sample string";
// var x = str.charAt(str.length - 1);
// console.log(x);
// Q13
// var input = "Hello, World!";
// var cha = input.charAt(4);
// console.log(cha);
// Q14
// Q15
// var reply = "no, not now, maybe later";
// var revisedReply = ""; 
// var foundFirstNo = false; 

// for (var i = 0; i < reply.length; i++) {
//   if (!foundFirstNo && reply.slice(i, i + 2) === "no") {
//     revisedReply += "yes";
//     foundFirstNo = true; 
//   } else {
//     revisedReply += reply.charAt(i);
//   }
// }
// console.log(revisedReply);
// Q16
// var str = "I have 1 apple and 2 oranges.";
// var newStr = str.replace("1", "one");

// console.log(newStr);
// Q17
// var x = "apples";
// var y = x.replace(/a/g, "z");
// console.log(y);

// -----------------------------------------------------

// Chapter 26 (Rounding Numbers)
// Q1
// var yourNumber = 23;
// var roundedNumber = Math.round(yourNumber);
// console.log(roundedNumber);
// Q2
// var yourNumber = 23;
// var roundedNumber = Math.random(yourNumber);
// console.log(roundedNumber);
// Q3
// var diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log("The dice rolled:", diceRoll);
// Q4
// var randomNumber = Math.random();
// var tossResult = randomNumber < 0.5 ? "Heads" : "Tails";
// console.log("The coin toss result is:", tossResult);

// ------------------------------------------

// Chapter 28, 29 (Converting Strings)
// Q1
// var str = "456";
// var num = Number(str);
// console.log(num); 
// Q2
// function stringToInt(str) {
//     return parseInt(str);
//   }
//   var stringNumber = "123";
//   var integerNumber = stringToInt(stringNumber);
//   console.log(integerNumber);
//   Q3
// var str = "2.71828";
// var floatingPointNumber = Number(str);
// console.log(floatingPointNumber); 
// Q5
// var number = 123.45;
// var stringNumber = "" + number;
// console.log(stringNumber); 
// Q6
// function numberToString() {
//     var number = 42;
//     var stringNumber = number.toString();
//     return stringNumber;
//   }
  
//   var result = numberToString();
//   console.log(result);
//   Q7
// var str = "3.14";
// var roundedInteger = Math.round(parseFloat(str));
// console.log(roundedInteger);
//  ---------------------------------------------

// Chapter 30 (Controlling the length of decimals)
// Q1
// var num = 3.14159265359;
// var newNum = num.toFixed(4);
// console.log(newNum); 
// Q2
// var num = 3.14159265359;
// num = Number(num.toFixed(2));
// console.log(num); 
// Q3
// var num = 234;
// if (num.toFixed(2).toString().length > 4) {
//    console.log(num);
//   }
// Q4
// var myNumber = 3.14159265359;
// var roundedString = myNumber.toFixed(2);
// alert(roundedString);
// ----------------------------------------------------------

  