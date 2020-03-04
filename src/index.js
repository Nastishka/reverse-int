module.exports = function reverse(n) {
    if (Number.isInteger(n)) {
        return parseInt(n.toString()
            .split('')
            .reverse()
            .join('')
        );
    }
    return n;
}
