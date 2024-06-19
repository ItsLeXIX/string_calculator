// StringCalculator.js
class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        } else {
            numbers = numbers.replace(/\n/g, ',');
            return numbers.split(',').reduce((sum, num) => sum + parseInt(num, 10), 0);
        }
    }
}

module.exports = StringCalculator;