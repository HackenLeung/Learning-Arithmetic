// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 	136 ms
 */
 var twoSum = function(nums, target) {
    let index = 1;
    let firstIndex = 0;
    while (true) {
        if (nums[firstIndex] + nums[index] === target) {
            return [firstIndex, index]
        }
        index++
        if (index >= nums.length) firstIndex++, index = firstIndex + 1;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 112 ms
 */
 var twoSum = function(nums, target) {
    let res = [];
    for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]==target){
                    res[0]=i;
                    res[1]=j;
                    break;
                }
            }
        }
        return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 	60 ms
 */
 var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
        return [i, hash[target - nums[i]]];
        }
        hash[nums[i]] = i;
    }
    return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 	72 ms
 */
 var twoSum = function(nums, target) {
    let obj = {}
    let arr = []
    for(let index =0;index<nums.length;index++){
        let item = nums[index];
        if (obj[target - item]) {
            arr = [+obj[target - item], +index]
        } else {
            obj[item] = index + '';
        }
    }
    return arr
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 204 ms
 */
 var twoSum = function(nums, target) {
    let index = 0;
    let firstIndex = 0;
    let length = nums.length - 1;
    while (length > 0) {
        if (nums[firstIndex] + nums[index + 1] === target) {
            return [firstIndex, index + 1]
        }
        index++
        if (index >= nums.length - 1) length--, firstIndex++, index = firstIndex;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 	68 ms
 */
 var twoSum = function(nums, target) {
    let obj = {}
    let arr = []
    nums.forEach((item, index) => {
        if (obj[target - item]) {
            arr = [+obj[target - item], +index]
        } else {
            obj[item] = index + '';
        }
    });
    return arr
};