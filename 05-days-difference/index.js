const getDaysDifference = (a, b) =>
  b.getTime() - a.getTime() > 0 ? (b.getTime() - a.getTime()) / 1000 / 60 / 60 / 24 : 0;

module.exports = { getDaysDifference };
