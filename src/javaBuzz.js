var JavaBuzz = function() {};

JavaBuzz.prototype.isDivisibleByThree = function (number) {
  return this._isDivisibleBy(number, 3);
};

JavaBuzz.prototype.isDivisibleByFive = function (number) {
  return this._isDivisibleBy(number, 5);
};

JavaBuzz.prototype.isDivisibleByFifteen = function (number) {
  return this._isDivisibleBy(number, 15);
};

JavaBuzz.prototype._isDivisibleBy = function (number, divisor) {
  return(number % divisor === 0);
};
