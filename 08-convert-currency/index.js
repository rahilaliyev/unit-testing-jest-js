const convertCurrency = (amount, exchangeRate) => {
  if (amount <= 0 || exchangeRate <= 0) {
    throw new Error("Variables must be positive");
  }

  if (isNaN(amount) || isNaN(exchangeRate)) {
    throw new Error("Variables must be number");
  }

  return amount * exchangeRate;
};

module.exports = { convertCurrency };
