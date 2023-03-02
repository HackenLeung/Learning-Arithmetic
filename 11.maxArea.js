// 盛最多水的容器

// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。

// 示例 1：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 示例 2：
// 输入：height = [1,1]
// 输出：1

// 提示：
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
// 超出时间限制 取每个比较最大
// var maxArea = function(height) {
//     let index = 0; //
//     let j = 1;
//     let maxNum = 0;
//     while(index<=height.length-1){
//         let row = 1;
//         while(j<=height.length-1){
//             let nowNum = row * Math.min(height[index],height[j])
//             if(nowNum > maxNum ) maxNum = nowNum;
//             row ++
//             j++
//         }
//         index++
//         j = index + 1;
//     }
//     return maxNum;
// };

// [1,2,1]这个情况不行
// var maxArea = function(height) {
//     let isEvery = height.every(item=>item===height[0])
//     if(isEvery) return height[0] * height.length-1;
//     let maxNum = 0;
//     let maxNum2 = 0;
//     height.forEach(item=>{
//         if(item > maxNum) maxNum = item;
//         if(item > maxNum2 && item < maxNum) maxNum2 = item;
//     })
//     let arr = height;
//     let sameIndex = null;
//     let sindex= 0;
//     while(true){
//         let index = arr.indexOf(maxNum);
//         if(~index) {
//             arr = arr.slice(index+1,height.length);
//             sameIndex = index + sindex;
//             sindex += index + 1;
//         } else break;
//     }
//     let maxIndex = height.indexOf(maxNum);
//     let row = Math.abs(maxIndex - height.indexOf(maxNum2)) * Math.min(maxNum,maxNum2);
//     let sameNum = Math.abs(maxIndex - sameIndex) * maxNum;
//     return Math.max(row,sameNum)
// };

var maxArea = function(height) {
    let lIndex = 0;
    let rIndex = height.length-1;
    let maxNum = 0;
    while(lIndex<rIndex){
        let row = rIndex - lIndex;
        let num = row * Math.min(height[lIndex],height[rIndex]);
        if(num>maxNum) maxNum = num;
        if(height[lIndex] < height[rIndex]) lIndex++ //左向右移
        else rIndex-- // 右向左移
    }
    return maxNum
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]),'？？');