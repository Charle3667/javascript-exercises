const leapYears = function(date) {
    if((date%4) === 0) {
        return(ifHundreth(date))
    }
    else{
        return(false)  
    }
};

let ifHundreth = function(date) {
if((date%100) === 0) {
    return(ifFourHundreth(date))
}
else{
    return(true)}
}

let ifFourHundreth = function(date) {
if((date%400) === 0) {
    return(true)
} else{
    return(false)
}
}



// Do not edit below this line
module.exports = leapYears;
