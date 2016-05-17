describe('JavaBuzz', function() {

  var javaBuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javaBuzz = new JavaBuzz();
      expect(javaBuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is', function() {

    it('not divisible by 3', function() {
      javaBuzz = new JavaBuzz();
      expect(javaBuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

});
