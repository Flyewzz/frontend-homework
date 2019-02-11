'use strict';

const max = numbers => Math.max(...numbers);

function roman(value) {
    var regNum = /[0-9]{1,}/i;
    var regRoman = /^((?:M{0,3}?(?:D?C{0,3}|C[DM])?(?:L?X{0,3}|X[LC])?(?:I{0,3}?V?I{0,3}|I[VX])))$/igs;
    if (regNum.test(value)) {
            return toRoman(value);
        } else {
            if (regRoman.test(value) && value != '') {
                return toArabic(value);
            } else {
                return "INPUT ERROR!"
            }
        }
  return toRoman(value);
}

let R = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

let A = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

function toRoman(N) {

    var Result = "";
    var i = R.length - 1;

    while(N > 0) {
       while (A[i] > N) {
           --i;
       }
       Result += R[i];
       N -= A[i];
    }
    return Result;
}

function toArabic(number) {

    number = number.toUpperCase();
    var pos = 0;
    var result = 0;
    for (var i = R.length - 1; i > -1 && pos < number.length;) { // -1 - выход за границы массива
        if (number.substr(pos, R[i].length) == R[i]) {
            result += A[i];
            pos += R[i].length;
            continue;
        }
        --i;

    }
    return result;
}
