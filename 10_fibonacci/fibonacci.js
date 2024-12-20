const fibonacci = function(position) {
    position = Number(position);
    if (position < 0) return 'OOPS';
    const fibonacciNums = [0,1,1]; //0 = 
    for (let i = 3; i < position + 1; i++) {
        fibonacciNums[i] = fibonacciNums[i-1] + fibonacciNums[i-2];
    }
    return fibonacciNums[position];
};
fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
