const add = (numbers) => {
  let delimiter = ",";
  if (numbers.indexOf("//") == 0) {
    delimiter = numbers[2];
    numbers = numbers.substring(4);
  }

  if (numbers.split(delimiter).length > 2) {
    throw new TypeError("Unknow amount of numbers");
  }

  if (numbers.indexOf(",\n") !== -1 || numbers.indexOf("\n,") !== -1) {
    throw new TypeError("Invalid input sequences");
  }

  const numArray = numbers.replace("\n", ",").split(delimiter);

  const negatives = [];
  if (
    numArray.forEach((num) => {
      if (parseInt(num) < 0) {
        negatives.push(num);
      }
    })
  );

  if (negatives.length > 0) {
    throw new TypeError(`negatives not allowed ${negatives.join(" ")}`);
  }

  if (numArray[0] === "") return 0;

  if (numArray.length === 2 && numArray[1] === "") return parseInt(numArray[0]);

  return numArray.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  }, 0);
};

module.exports = { add };
