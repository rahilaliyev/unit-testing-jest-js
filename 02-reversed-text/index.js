const reversedText = str => {
  if (!str) {
    throw new Error("Text must not be empty");
  }
  return str.toString().split("").reverse().join("");
};

module.exports = { reversedText };
