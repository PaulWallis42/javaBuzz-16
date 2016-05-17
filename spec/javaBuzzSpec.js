describe('JavaBuzz', function() {

  var javaBuzz;
  beforeEach(function(){
    javaBuzz = new JavaBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javaBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javaBuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 & 5', function() {
      expect(javaBuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is', function() {

    it('not divisible by 3', function() {
      expect(javaBuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('not divisible by 5', function() {
      expect(javaBuzz.isDivisibleByFive(4)).toBe(false)
    });

    it('not divisible by 3 or 5', function() {
      expect(javaBuzz.isDivisibleByFifteen(14)).toBe(false)
    });

  });

  describe('when playing, says', function() {

    it('Java when the number is divisible by 3', function() {
      expect(javaBuzz.says(3)).toEqual("Java");
    });

    it('Buzz when the number is divisible by 5', function() {
      expect(javaBuzz.says(5)).toEqual("Buzz");
    });

    it('JavaBuzz when the number is divisible by 15', function() {
      expect(javaBuzz.says(15)).toEqual("JavaBuzz")
    });

    it('The number when not divisible by 3, 5 or 15', function() {
      expect(javaBuzz.says(14)).toEqual(14);
    });

  });

});
