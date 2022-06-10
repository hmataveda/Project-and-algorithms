// Swapping the values
let myNumber = 42;
let myName = "veda";

let hold = myNumber;

myNumber = myName;
myName = hold;

console.log(myName + " " + myNumber);

//Don’t Worry, Be Happy

function beCheerful() {
  let i = 0;
  while (i < 98) {
    console.log("Good morning! " + i);
    i++;
  }
}
beCheerful();

//Multiples of Three – but Not All

function multiplesOf3() {
  for (var i = -299; i <= 0; i++) {
    if (i == -3 || i == -6) {
      continue;
    }
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
multiplesOf3();

//Printing Integers with While

function usingWhile() {
  let i = 2000;

  while (i <= 5280) {
    console.log(i);
    i++;
  }
}

usingWhile();

// Print and Count

function count() {
  let count = 0;

  for (let i = 512; i <= 4096; i++) {
    if (i % 5 == 0) {
      console.log(i);
      count++;
    }
  }
  console.log(count);
}

// count();

//Multiples of Six

const multipleOfsix = function () {
  let i = 0;
  while (i < 60000) {
    if (i % 6 == 0) {
      console.log(i);
    }
    i++;
  }
};

// multipleOfsix();

// Counting, the Dojo Way

const dojoWay = () => {
  let i = 1;
  while (i <= 100) {
    if (i % 10 == 0 && i % 5 == 0) {
      console.log(" Dojo");
    } else if (i % 5 == 0) {
      console.log("Coding");
    }

    i++;
  }
};

// dojoWay();

// What Do You Know?

const param = (param) => {
  console.log(param);
};

// param("incoming");

// Whoa, That Sucker’s Huge…

const recursion = () => {
  let sum = 0;

  const oddSum = (start, end) => {
    if (start % 2 == 0) {
      start = start + 1;
    }
    if (start > end) {
      return 0;
    }
    sum = start + oddSum(start + 2, end);
    return sum;
  };
  console.log(oddSum(3000, -3000));
};

recursion();

//  Countdown by Fours

const contDownFours = () => {
  const minusFour = (num) => {
    if (num <= 0) {
      return;
    }
    console.log(num);
    minusFour(num - 4);
  };

  console.log(minusFour(40));
};

contDownFours();

//leapyear

const leapyear = (year) => {
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 == 0) {
      console.log(year + " is  supericious leapyear");
    } else if (year % 100 == 0 && year % 400 != 0) {
      console.log(year + "  is not leapyear - suspicious ");
    } else {
      console.log(year + " is normal leapyear");
    }
  } else {
    console.log(year + " is not leapyear");
  }
};

leapyear(1900);
