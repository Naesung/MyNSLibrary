/**
 * 061 ������ü�� �ѳ��� ����
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} The surface area of cuboid
 * @since <0.37.0
 */
exports.cuboidArea = function (a, b, c) {
    return (2 * ((a * b) + (b * c) + (c * a)))
}
