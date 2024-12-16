const sumAll = function(first, second) {
    if (!(Number.isInteger(first)) || !(Number.isInteger(second))) return 'ERROR';
    if (first < 0 || second < 0) return 'ERROR';
    const start = first < second ? first : second;
    const end = second > first ? second : first;
    let sum = 0;
    for (let i = start; i < end +1; i++) sum += i;
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
