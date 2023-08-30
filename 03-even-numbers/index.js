const evenNumbers = arr => arr.filter(num => typeof num === "number" && num % 2 === 0);

module.exports = { evenNumbers };
