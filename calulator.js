const add = (numbers) => {
  const numArray = numbers.split(",");

  if (numArray.length > 2) {
    throw new TypeError("Unknow amount of numbers");
  }

  if (numArray[0] === "") return 0;

  if (numArray.length === 2 && numArray[1] === "") return parseInt(numArray[0]);

  return parseInt(numArray[0]) + parseInt(numArray[1]);
};

module.exports = { add };
