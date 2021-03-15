function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

exports.min = function min(array) {
    if (arguments.length > 0 && array.length > 0) {
        array.sort(compareNumeric);
        return array[0];
    } else return 0;
}

exports.max = function max(array) {
    if (arguments.length > 0 && array.length > 0) {
        array.sort(compareNumeric);
        return array[(array.length - 1)];
    } else return 0;
}

exports.avg = function avg(array) {
    if (arguments.length > 0 && array.length > 0) {
        let result = array.reduce((sum, current) => sum + current, 0) / array.length;
        return result;
    } else return 0;
}
