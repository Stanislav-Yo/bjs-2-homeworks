function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let number of arr) {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
    sum += number;
  }

  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (let number of arr) {
    sum += number;
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  let min = arr[0];
  let max = arr[0];

  for (let number of arr) {
    if (number < min) min = number;
    if (number > max) max = number;
  }

  return max - min;
}

function isEven(number) {
  return number % 2 === 0;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let number of arr) {
    if (isEven(number)) {
      sumEvenElement += number;
    } else {
      sumOddElement += number;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let number of arr) {
    if (isEven(number)) {
      sumEvenElement +=number;
      countEvenElement ++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) return 0;
  let maxWorkerResult = -Infinity;
  
  for (let dataArr of arrOfArr) {
    const currentResult = func(...dataArr);
    
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }
  
  return maxWorkerResult;

}
