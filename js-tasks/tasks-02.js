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

Додаткові. Завдання 5: https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript;
function doubleInteger(i) {
  return i * 2;
}

Завдання 6:  https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript;
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

Завдання 7:
Завдання 8:  https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript;
function getRealFloor(n) {
  if (n === 0 || n === 1) {
    return 0;
  } else if (n > 1 && n < 13) {
    return n - 1;
  } else if (n > 13) {
    return n - 2;
  } else if (n < 0) {
    return -Math.abs(n);
  }
}

Завдання 9: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript;
function past(h, m, s) {
  let hour = h * 60 * 60 * 1000;
  let minutes = m * 60 * 1000;
  let second = s * 1000;

  return hour + minutes + second;
}

Завдання 10: https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript;
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  }
  return false;
}
