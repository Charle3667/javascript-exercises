
const removeFromArray = function(array, y, z) {
    console.log("array length = " + array.length)
    for(i=0; i<=(array.length); i++){
        if (array[i] === y) {
            console.log(array[1])
            array.splice(i, 1)
        }
        else if (array[i] === z) {
            console.log(array[1])
            array.splice(i, 1)
        }
        else{continue}
    }
return(array)
}

removeFromArray([1, 2, 3, 4], 3, 2)


// Do not edit below this line
module.exports = removeFromArray;
