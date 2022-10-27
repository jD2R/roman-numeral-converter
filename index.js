const convertRoman = number => {
    //localize arrays for efficiency
    const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
            
    //store an index an' the outputted numeral. 
    let index = 0, romanNumeral = '';
    
    //faster than Math.round
    number = number | 0;
    
    //no need to use Array.prototype.every [inefficient]
    while (number > 0) {
        //cache for efficiency
        const cache = values[index];
        if (number >= cache) {
            romanNumeral += numerals[index];
            number -= cache;
            index = 0;
        }
        else index++;
    }
    
    //return the roman numeral
    return romanNumeral;
}
