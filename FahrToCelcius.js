function convertFahrToCelsius(F) {

  var converted;

  if(Array.isArray(F)){

    // return F + " is not a valid number but a/an array.";

    console.log(F, 'is not a valid number but a/an array');

  } else if (typeof(F) == 'object'){
    console.log(F, 'is not a valid number but a/an', typeof(F));   
    
  }else if (isNaN(F)){
    console.log("'", F , "'",'is not a valid number but a', typeof(F))
  }else {
    converted =  (F - 32) * 5/9;
    console.log(converted.toFixed(4))
  }

}

convertFahrToCelsius("e")




















