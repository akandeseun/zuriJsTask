function checkYuGiOh(n) {
  const result = []

  if (isNaN(n)){
    console.log("'", n , "'", 'is not a valid number but a ', typeof(n))
  }

  const arr = Array.from({length: n}, (_, index) => index + 1);

  for (let i=1; i<= arr.length; i++) {
    let str = ''

    if (i % 2 === 0) {
      result.push('yu');

      if (i % 5 === 0 && i % 2 === 0 && i % 3 === 0){
        result.push('yu-gi-oh');
      }

    } else if (i % 3 === 0) {
      result.push('gi');
    } else if (i % 5 === 0) {
      result.push('oh');
    }else {
      result.push(Number(i));
    }
  }
  return result
}

console.log(checkYuGiOh("e"));