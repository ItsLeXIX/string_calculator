// StringCalculator.js
class StringCalculator {
    add(numbers) {
    if (numbers === '') {
        return 0;
    } else {
        numbers = numbers.replace(/\n/g, ',');
        let numArray = numbers.split(',').map(num => parseInt(num, 10));
        numArray = numArray.filter(num => num <= 1000); // Ignore numbers greater than 1000
        let negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error('negatives not allowed: ' + negatives.join(','));
        }
        return numArray.reduce((sum, num) => sum + num, 0);
    }
}
}

module.exports = StringCalculator;