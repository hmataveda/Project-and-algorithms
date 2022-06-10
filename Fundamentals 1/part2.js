//First Plus Lenglet arr
let arr = ["3", 2, 1, 4, 5];

function addArr(arr) {
  return arr[0] + arr.length + arr[2];
}

console.log(addArr(arr));

//Values Greater than Second

let arr2 = [11, 10, 9, 3, 2, 1];

function greter2(arr) {
  let newArr = [];
  arr.forEach((element, index, arr) => {
    if (element > arr[index + 2]) {
      console.log(element);
      newArr.push(element);
    }
  });
  return newArr;
}

console.log(greter2(arr2));

// This Length, That Value

const lengthValue = (len, val) => {
  let arr3 = [];
  if (len == val) {
    console.log("Jinx");
  }
  for (var i = 0; i < len; i++) {
    arr3.push(val);
  }
  return arr3;
};
console.log(lengthValue(3, 3));

//Fit the First Value
const arr4 = [4, 3, 4, 5];
const fitValue = (arr) => {
  if (arr[0] < arr.length) {
    console.log(" too short ");
  } else if (arr[0] > arr.length) {
    console.log("too big");
  } else {
    console.log("correct");
  }
};
fitValue(arr4);

//FtoC
