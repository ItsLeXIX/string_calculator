
describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return the number for a single number string', function() {
        expect(calculator.add('5')).toEqual(5);
    });

	it('should return the sum for a two number string separated by comma', function() {
        expect(calculator.add('1,2')).toEqual(3);
    });

	it('should return the sum for an unknown amount of numbers', function() {
        expect(calculator.add('1,2,3,4,5')).toEqual(15);
    });

	it('should handle new lines between numbers', function() {
        expect(calculator.add('1\n2,3')).toEqual(6);
    });
	
	it('should throw an error for negative numbers', function() {
        expect(function() { calculator.add('1,-2,-3'); }).toThrow(new Error('negatives not allowed: -2,-3'));
    });

	it('should ignore numbers bigger than 1000', function() {
        expect(calculator.add('2,1001')).toEqual(2);
    });

});
