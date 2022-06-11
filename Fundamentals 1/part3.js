// Biggie Size
const arr1 = [5, "2", 5, -5];
const makeItzBig = (arr1) => {
  arr1.forEach((item, ind, arr) => {
    if (item > 0) {
      arr[ind] = "Big";
    }
  });
  return arr1;
};

console.log(makeItzBig(arr1));

// Print Low, Return High

const arr2 = [5, "fjf", "11", 5, 7, 2, -5];
const maxMin = (arr2) => {
  let high = arr2[0];
  let low = arr2[0];
  arr2.forEach((item, ind, arr) => {
    if (item > high) {
      high = item;
    }
    if (item < low) {
      low = item;
    }
  });
  console.log("low", low);
  return high;
};

console.log(maxMin(arr2));

// Print One, Return Another
const arr3 = [2, "fjf", "11", 32, 2, 2, 2];
const blah = (arr3) => {
  console.log("second2last", arr3[arr3.length - 2]);
  const firstOdd = arr3.find((item) => {
    return typeof item == "number" && item % 2 != 0;
  });
  return firstOdd;
};

console.log(blah(arr3));

const double = (arr) => {
  let nwarr = [];
  for (let item of arr) {
    nwarr.push(item * 2);
  }
  console.log("arr", arr);
  return nwarr;
};
console.log("ee", double([3, 4, 5]));

// Count Positives

const positives = (arr) => {
  let negatives = 0;
  for (let item of arr) {
    if (item >= 0) {
      negatives++;
    }
  }
  arr[arr.length - 1] = negatives;
  return arr;
};
console.log(positives([-1, "ss", 2, 3, 4, -3]));

//Evens and Odds

const strings = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1].length;
  }
  arr[0] = 0;
  return arr;
};

console.log("", strings(["ssshi", "biww", "viw"]));

//revers

const arrMax = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let item of arr) {
    if (item > max) {
      secondMax = max;
      max = item;
    } else if (item > secondMax) {
      secondMax = item;
    }
  }
  console.log("max", max);
  console.log("seconMax", secondMax);
};

// console.log("arraymax", arrMax([1, 8, -7, 16, -5]));
// foof

const hungry = (arr) => {
  let gotFood = false;
  for (let item of arr) {
    if (item == "food") {
      console.log("food");
      gotFood = true;
    }
  }
  return !gotFood ? "hungry" : "";
};
console.log(hungry([1, 2, 3, "food"]));

// swap

const swap = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = arr.length / 2;
  console.log("eee", mid);
  for (let i = start; i < mid; i = i + 2) {
    let temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    end = end - 2;
  }
  console.log("swap", arr);
};
swap([1, 2, 9, 5, 6, 7]);

const scale = (arr, num) => {
  //   arr.forEach((item, indx, arr) => {
  //     arr[indx] = item * num;
  //   });
  const newrr = arr.map((item) => {
    return item * num;
  });
  return newrr;
};
console.log("scal", scale([1, 2, 3, 4], 2));
