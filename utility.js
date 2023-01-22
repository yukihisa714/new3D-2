import { Point, Vector, PlaneEquation } from "./shape.js";

export const key = {};
document.onkeydown = (e) => {
    key[e.key] = true;
    // console.log(e.key);
}
document.onkeyup = (e) => {
    key[e.key] = false;
}

export const sin = (theta) => Math.sin(Math.PI / 180 * theta);
export const cos = (theta) => Math.cos(Math.PI / 180 * theta);
export const tan = (theta) => Math.tan(Math.PI / 180 * theta);

export const atan = (tan) => Math.atan(tan) / Math.PI * 180;


// 三次元上の二点間の距離を計算する関数
export const calc3dLen = (p1, p2) => Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);

// 三次元上の平面と直線(ベクトル)の交点を求める関数
/**
 * 
 * @param {Vector} vector 直線のベクトル(x, y, z)
 * @param {PlaneEquation} equation 平面の方程式
 * @param {point} point 直線上の一点
 * @returns 
 */
export const calcIntersectionVtx = (vector, equation, point) => {
    const t = -(equation.a * point.x + equation.b * point.y + equation.c * point.z + equation.d) /
        (equation.a * vector.x + equation.b * vector.y + equation.c * vector.z);

    return new Point(
        vector.x * t + point.x,
        vector.y * t + point.y,
        vector.z * t + point.z,
    );
}