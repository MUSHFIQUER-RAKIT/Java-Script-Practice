const sentence =
  "play with rakit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with rakit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with rakit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

const matches = sentence.match(/rakit/gi);
const occurances = matches ? matches.length : 0;

let position = sentence.search(/Rakit/i);
position = position >= 0 ? position : "Not Found";
document.getElementById("demo1").innerHTML = occurances + "<br>" + position;

// ~~~~~~~~~~~~~ : linearSearch() function টি implement করে দেখানO ~~~~~~~~~~~~ problem 1
function linearSearch(arr, val) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "Not Found";
}
document.getElementById("demo2").innerHTML = linearSearch(
  ["a", "b", "xc", "d", "e"],
  "xc"
);

// কোনো Array থেকে কি ভাবে সব থেকে বড় string খুঁজে বের কর এবং তার index নাম্বার  problem 2
function longestName(names) {
  let lowesetWord = " ";
  for (name of names) {
    if (name.length > lowesetWord.length) {
      lowesetWord = name;
    }
  }
  return [lowesetWord, names.indexOf(lowesetWord)];
}

document.getElementById("demo3").innerHTML = longestName([
  "Mushfiquer",
  "Rakit",
  "Mushfiquer Rakit",
]);

// ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের কর  problem 3
function fizzBuzz(number) {
  for (i = 1; i <= number; i++) {
    if (i % 15 == 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} is Buzz`);
    } else if (i % 5 == 0) {
      console.log(`${i} is Fizz`);
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz(100);
// Array থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি ? ~~ problem 4
const mixedArr = [
  "lws",
  undefined,
  "learn With Rakit",
  false,
  "",
  "apple",
  40,
  "k",
  null,
  0,
  true,
  "Thanks all",
  NaN,
];
const fixedArr = mixedArr.filter(function (el) {
  if (el) {
    return true;
  } else {
    return false;
  }
});
const truthyArr = mixedArr.filter(Boolean);
// console.log(truthyArr);
// Object  থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি ? ~~ problem 5
const obj = {
  a: "abcd",
  b: undefined,
  c: "learn with rakit",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: "R",
  i: null,
  j: true,
  k: "Thank you all",
  l: NaN,
  m: 0,
};
const truthyObj = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};
// console.log(truthyObj(obj));

/* ~~~~~~~~~~~~~~~  Nested Array   ~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~ problem 6*/
const profile = [
  {
    name: "Rahim",
    roll: 18,
    collage: "Dpi",
  },
  {
    name: "Karim",
    roll: 20,
    collage: "Dpi",
  },
  {
    name: "Joshim",
    roll: 15,
    collage: "Dpi",
  },
  {
    name: "Hasem",
    roll: 90,
    collage: "Dpi",
  },
  {
    name: "Kasem",
    roll: 40,
    collage: "Dpi",
  },
];
// Find The Index Whice Roll IS 20
function findIndex(rollNumber) {
  return rollNumber.roll === 20;
}
let finds = profile.findIndex(findIndex);

// Find The object Whice Roll IS 20
let findObj = profile.find(findIndex);

// Find Which Roll is 90 then replace the name and return Array
function replaceName(number) {
  return number.roll === 90;
}
let repName = profile.findIndex(replaceName);
profile[repName].name = "ffff";

// delete the object whice Collage is CPi
const deleteCPi = profile.filter(remove => remove.collage > "Cpi");
console.log(deleteCPi);
// ~~~~~~~~~~~~~~  JavaScript Object Prototypes   ~~ problem 7

function person(first, last, age, classe) {
  this.firstName = first;
  this.lastName = last;
  this.ages = age;
  this.classe = classe;
}
person.prototype.nationality = "Bangladesh";
const rahimP = new person("Rahim", "Islam", 18, 10);
const karimP = new person("Karim", "Islam", 19, 9);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
const person2 = { firstName: "Anne", lastName: "Smith" };
Object.assign(person1, person2);
// Object.entries() returns an array of the key/value pairs in an object
let text1 = Object.entries(person1);
// Object.entries() makes it simple to use objects in loops:
const fruits = { Bananas: 300, Apples: 200, Oranges: 900 };
let text2 = "";
for ([fruit, amount] of Object.entries(fruits)) {
  text2 += fruit + ": " + amount + "<br>";
}
document.getElementById("demo3").innerHTML = text2;

const fruits1 = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];
function myCallBack({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}
const result = Object.groupBy(fruits1, myCallBack);
let text = "These fruits are Ok: <br>";
for (let [x, y] of result.ok.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
text += "<br>These fruits are low: <br>";
for (let [x, y] of result.low.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
document.getElementById("demo6").innerHTML = text;

const person3 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};
Object.defineProperty(person3, "language", { value: "no" });
Object.defineProperty(person3, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});
// console.log(person3.fullName);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~  JavaScript Accessors (Getters and Setters)~~~ problem 8
const newSet = new Set(["a", "b", "c", "d", "a", "b"]);
// console.log(newSet.add("x"));
let text5 = "";
newSet.forEach(function (value) {
  text5 += value + " ";
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~  A Counter Dilemma~~~ problem 9
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
function myfunction() {
  document.getElementById("btn1").innerHTML = add();
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript Closure~~~ problem 10
function outer() {
  var x = 10;
  function inner() {
    var y = 20;
    // console.log(x + y);
  }
  x = 20;
  y = 30;
  return inner;
}
var innerFun = outer();
innerFun();

let count = 0;
(function counter() {
  if (count === 0) {
    let count = 1;
    // console.log(count);
  }
  // console.log(count);
})();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript Callbacks ~~~ problem 11
const paymentSuccess = true;
const marks = 80;

function enRoll(callBack) {
  console.log("Course enrollment is in progress.");

  setTimeout(function () {
    if (paymentSuccess) {
      callBack();
    } else {
      console.log("Payment Failed !");
    }
  }, 2000);
}

function progress(callBack) {
  console.log("Course on Progress");

  setTimeout(function () {
    if (marks >= 80) {
      callBack();
    } else {
      console.log("You could not get enough marks to get certificate");
    }
  }, 2000);
}

function getCertificate() {
  console.log("preparing the certificate");

  setTimeout(function () {
    console.log("congrats you got the certificate");
  }, 1000);
}
enRoll(function () {
  progress(getCertificate);
});
