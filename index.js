// Declare some initial values that control what number is matched to what letter.
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

// Accepts one parameter, a number.
// Rounds any floating values to the nearest whole.
function convertToRoman(num) {
    let romanNumeral = '';
    let number = round(num);
    
    while (number > 0) {
        // loops through values until we find one that fits in
        values.every((val) => {
            if (number - val >= 0) {
                romanNumeral += numerals[values.indexOf(val)];
                number -= val;
                return false; // breaks out of the loop
            }
            return true; // continues to loop
        });

    }
    // returns our finished numeral
    return romanNumeral;
}
