let ANSWER = {
  NONE: 'Not divisible',
  FIZZ: 'Fizz',
  BUZZ: 'Buzz',
  FIZZBUZZ: 'FizzBuzz'
}

let calculateNum = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return ANSWER.FIZZBUZZ
  }

  if (num % 3 === 0) {
    return ANSWER.FIZZ
  }

  if (num % 5 === 0) {
    return ANSWER.BUZZ
  }

  return ANSWER.NONE
}

export {calculateNum}
