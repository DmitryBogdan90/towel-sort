module.exports = function towelSort(matrix) {
    return matrix ? matrix.flatMap((currentValue, index) => {
        return !!(index % 2) ? currentValue.sort((a, b) => b - a) : currentValue
    }) : [];
}
