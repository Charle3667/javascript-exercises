
    
let run = function (x,y) {
    let sum = 0
    if (x < y) {
    for(i=x; i<=y; i++){
        sum = (sum+i)
    }
    return(sum)
    
   }
   else {
    for(i=x; i >= y; i--) {
        sum = (sum+i)
    }
    return(sum)
   }
}


let isPositive = function(x, y) {
if ((x  > 0) && (y > 0)) {
   return(run(x, y))
} else {return("ERROR")}
}

let isInt = function(x, y) {
if (Number.isInteger(x) && Number.isInteger(y)) {
    return(isPositive(x, y))
} else {return("ERROR")}
}

const sumAll = function(x, y) {
    return(isInt(x,y))
    
}


// Do not edit below this line
module.exports = sumAll;
