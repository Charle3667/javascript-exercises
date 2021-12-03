const ftoc = function(f) {
  let celcius = ((f-32)*(5/9));
  if ((celcius%1) === 0 ) {
    return(celcius)
  } else {
    let cel = celcius.toFixed(1);
    return(Number(cel));
  }
};

const ctof = function(c) {
  let fahrenheit = ((c*(9/5))+32);
  if ((fahrenheit%1) === 0 ) {
    return(fahrenheit)
  } else {
    let far = fahrenheit.toFixed(1);
    return(Number(far));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
