// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].


// var array = ["a", "b", "c", "d", "e", "f"];

// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;
//   while (index < array.length) {
//     result.push(array[index]);
//     index += 2;
//   }
//   console.log(result);
// }

// selectEvenItems();

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// var array = [100, 42, 85, 5, 4, 8, 1, 2, 14, 27, 3, 6, 9];
// var index1 = 0;
// var index2 = 1;
// var greatest = 0;

// function findGreatest(numbers) {
//   while (index1 < array.length) {
//     while (index2 < array.length) {
//       if (array[index1] > array[index2] && array[index1] > greatest) {
//         greatest = array[index1];
//       }
//       index2++;
//     }
//     index2 = 0;
//     index1++;
//   }
//   console.log(greatest);
// }

// findGreatest();


// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// var number = 5;
// var number2 = 0;
// var result = number;

// function doMath() {
//   while (number > 1) {
//     number2 = number - 1;
//     result = number2 * result;
//     number -= 1;
//   }
//   console.log(result);
// }

// doMath();

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// var array = [4, 5, 6, 7, 8, 9];
// var index = array.length;
// var revarray = [];

// function reverse(number) {
//   while (index > 0) {
//     index--;
//     revarray.push(array[index]);
//   }
//   console.log(revarray);
// }

// reverse();

// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

var array1 = [1, 5, 10];
var array2 = [100, 500, 1000];
var resultArray = [];
var index1 = 0;
var index2 = 0;

function doMath(numbers) {
  while (index2 < array2.length) {
    while (index1 < array1.length) {
      resultArray.push(array1[index1] + array2[index2]);
      index1++;
    }
    index1 = 0;
    index2++;
  }
  console.log(resultArray);
}

doMath();