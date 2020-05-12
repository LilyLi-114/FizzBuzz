var should = chai.should()
describe('fizzBuzz', function () {
  it('should input a number can be divided by 3, return Fizz', function () {
    var result = fizzBuzz(9)
    result.should.be.deep.equal('Fizz')
  })
  it('should input a number can be divided by 5, return Buzz', function () {
    var result = fizzBuzz(10)
    result.should.be.deep.equal('Buzz')
  })
  it('should input a number can be divided by both of 3 and 5, return FizzBuzz', function () {
    var result = fizzBuzz(15)
    result.should.be.deep.equal('FizzBuzz')
  })
  it('should input a number cannot be divided by both of 3 and 5, return input number', function () {
    var result = fizzBuzz(8)
    result.should.be.deep.equal(8)
  })
})