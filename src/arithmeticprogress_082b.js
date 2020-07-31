/**
 * 082B 등차수열 공식
 * 
 * @author: Naesung
 * @param {number} d
 * @param {number} n
 * @param {number} s
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgression_n = function (d, n, s) {
    return (s - (n - 1) * d)
}
