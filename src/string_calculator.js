// StringCalculator.js
class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0;
        } else {
            numbers = numbers.replace(/\n/g, ',');
            let numArray = numbers.split(',');
            let negatives = numArray.filter(num => parseInt(num, 10) < 0);
            if (negatives.length > 0) {
                throw new Error('negatives not allowed: ' + negatives.join(','));
            }
            return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
        }
    }
}

module.exports = StringCalculator;