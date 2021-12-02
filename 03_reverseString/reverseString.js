
const reverseString = function(str) {
let stringArray = []
let newString = ""
    for (i=0; i<=(str.length - 1); i++) {
        stringArray.push(str.charAt(i))
    }
    for (j=(str.length - 1); j>=0; j--) {
        newString = newString + stringArray[j]
    }
return(newString)
};



// Do not edit below this line
module.exports = reverseString;
