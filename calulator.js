const add = (numbers) => {
  const delimiter = extractDelimiter(numbers);

  if (numbers.indexOf('//') == 0) {
    numbers = numbers.substring(4);
  }

  if (numbers.indexOf(',\n') !== -1 || numbers.indexOf('\n,') !== -1) {
    throw new TypeError('Invalid input sequences');
  }

  const numArray = numbers.replace('\n', ',').split(delimiter);

  const negatives = checkNegatives(numArray);
  if (negatives.length > 0) {
    throw new TypeError(`negatives not allowed ${negatives.join(' ')}`);
  }

  if (numArray[0] === '') return 0;

  if (numArray.length === 2 && numArray[1] === '') return parseInt(numArray[0]);

  return performAction(numArray, delimiter);
};

/**
 * perform mathmetical operation based on delimiter
 *
 */
function performAction(numbers, operation) {
  if (operation === '*') {
    return numbers.reduce((aggregate, num) => {
      return parseInt(num) * aggregate;
    }, 1);
  }

  return numbers.reduce((aggregate, num) => {
    return parseInt(num) + aggregate;
  }, 0);
}

/**
 *
 * function extract the delimiter if any present or returns the default ,
 */

function extractDelimiter(numbers) {
  return numbers.indexOf('//') === 0 ? numbers[2] : ',';
}

/**
 *
 * function checks for presence of any negative number
 */
function checkNegatives(numbers) {
  const negatives = [];
  numbers.forEach((num) => {
    if (parseInt(num) < 0) {
      negatives.push(num);
    }
  });

  return negatives;
}

module.exports = { add };
