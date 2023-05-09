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

var array = [100, 42, 85, 5, 4, 8, 1, 2, 14, 27, 3, 6, 9];
var index1 = 0;
var index2 = 1;
var greatest = 0;

function findGreatest(numbers) {
  while (index1 < array.length) {
    while (index2 < array.length) {
      if (array[index1] > array[index2] && array[index1] > greatest) {
        greatest = array[index1];
      }
      index2++;
    }
    index2 = 0;
    index1++;
  }
  console.log(greatest);
}

findGreatest();