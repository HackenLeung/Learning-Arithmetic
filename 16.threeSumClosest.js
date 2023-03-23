// 最接近的三数之和

// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。

// 示例 1：
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

// 示例 2：
// 输入：nums = [0,0,0], target = 1
// 输出：0

// 提示：
// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力破解
// var threeSumClosest = function (nums, target) {
//     let index = 0;
//     let num = null;
//     while (index <= nums.length - 1) {
//         let lindex = index + 1;
//         while (lindex <= nums.length - 1) {
//             let rindex = lindex + 1;
//             while (rindex <= nums.length - 1) {
//                 if (lindex === rindex) lindex++
//                 let curNum = nums[index] + nums[lindex] + nums[rindex];
//                 if(num == null) num = curNum
//                 else if (Math.abs(curNum - target) < Math.abs(num - target)) num = curNum;
//                 rindex++
//             }
//             lindex++
//         }
//         index++
//     }
//     return num
// };

console.log(threeSumClosest([0,0,0],1), 'ss');
