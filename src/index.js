
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
	let towel = [];
	for (let i = 0; i < matrix.length; i++) {
		towel = i % 2 ? [...towel, ...matrix[i].reverse()] : [...towel, ...matrix[i]]
	}
	return towel;
}
