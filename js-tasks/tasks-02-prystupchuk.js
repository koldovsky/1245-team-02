// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const min = Math.min(...arr);
  return toReturn === "index" ? arr.indexOf(min) : min;
}
