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



});
