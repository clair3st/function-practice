// problem 1 create a sum() function
function sum(sumNumber1, sumNumber2) {
  sumAnswer = sumNumber1 + sumNumber2;
  //console.log('The sum of ' + sumNumber1 + ' and ' + sumNumber2 + ' is ' + sumAnswer + '.');
  return sumAnswer;
}

// problem 2 create a multiply() function
function multiply(multiplyNumber1, multiplyNumber2) {
  multiplyAnswer = multiplyNumber1 * multiplyNumber2;
  //console.log('The product of ' + multiplyNumber1 + ' and ' + multiplyNumber2 + ' is ' + multiplyAnswer + '.');
  return multiplyAnswer;
}

// problem 3 create function sumAndMultiply()
function sumAndMultiply(x, y, z) {
  sumAndMultiplyAnswer = [sum(sum(x,y),z), multiply(multiply(x,y),z)];
  console.log('The sum of ' + x + ', ' + y + ' and ' + z + ' is ' + sumAndMultiplyAnswer[0] + '.');
  console.log('The product of ' + x + ', ' + y + ' and ' + z + ' is ' + sumAndMultiplyAnswer[1] + '.');
  return sumAndMultiplyAnswer;
}

// problem 4 create function sumArray()
function sumArray(arrayX) {
  sumArrayAnswer = 0;
  for (i = 0; i < arrayX.length; i++) {
    sumArrayAnswer += arrayX[i];
  }
  console.log(arrayX + ' was passed in as an array of numbers, and ' + sumArrayAnswer + ' is their sum');
  return sumArrayAnswer;
}
