const sentence =
  "play with rakit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with rakit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with rakit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

const matches = sentence.match(/rakit/gi);
const occurances = matches ? matches.length : 0;

let position = sentence.search(/Rakit/i);
position = position >= 0 ? position : "Not Found";
document.getElementById("demo1").innerHTML = occurances + "<br>" + position;

// ~~~~~~~~~~~~~ problem: linearSearch() function টি implement করে দেখানO ~~~~~~~~~~~~~~~~~~~
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

// কোনো Array থেকে কি ভাবে সব থেকে বড় string খুঁজে বের কর এবং তার index নাম্বার
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

// ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের কর
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
// Array থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি ?
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
// Object  থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি ?
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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
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
    collage: "Cpi",
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
// console.log("Before", profile[repName]);

profile[repName].name = "ffff";
// console.log("after", profile);

// delete the object whice Collage is CPi
const deleteCPi = profile.filter(remove => remove.collage > "Cpi");
console.log(deleteCPi);
