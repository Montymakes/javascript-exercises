const removeFromArray = function(array, first, second = undefined, third = undefined, fourth = undefined) {
    const newArray = array.filter((element)=> {
        if (element !== first
            && element !== second
            && element !== third
            && element !== fourth
        ) return element
    })
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
