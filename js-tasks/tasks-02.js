Завдання 1: https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript;
function stringToArray(string){
  return string.split(' ');
}

Завдання 2: https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript;
function DNAtoRNA(dna) {
  let result = "";
  result = dna.replaceAll("T", "U");
  return result;
}

Завдання 3: https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript;
var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};

Завдання 4: https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript;
function min(arr, toReturn) {
  if (toReturn === "value") return Math.min(...arr);
  if (toReturn === "index") return arr.indexOf(Math.min(...arr));
}
