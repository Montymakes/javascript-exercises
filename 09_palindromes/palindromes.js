const palindromes = function (string) {
    const regex = /[^a-zA-Z0-9]/g;
    const cleanString = string.replace(regex, '').toLowerCase();
    let reverseString = '';
    for (let index = cleanString.length -1; index > -1; index--) reverseString += cleanString.charAt(index); 
    if (reverseString === cleanString) {
        return true;
    }
    return false;
};
// Do not edit below this line
module.exports = palindromes;
