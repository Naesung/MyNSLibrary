/**
 * 010.1 �������� �ﰢ���� ���� ����
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula
 * @since <0.37.0
 */
exports.circumscribedCircleTriangleArea_Side = function (a, b, c, r) {
    return (a * b * c / 4 / r)
}
