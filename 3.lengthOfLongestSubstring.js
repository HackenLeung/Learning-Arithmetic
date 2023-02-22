// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。


// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
    // if(!s) return 0
    // if(s.length<=1) return 1;
    // let strs = []; // 存放字符串
    // let lengths = []; // 存放长度
    // let length = 0; // 当前长度
    // let curStr = s;
    // let arr = s.split('');
    // arr.forEach(item => {
    //     if (strs.includes(item)) {
    //         lengths.push(length);
    //         length = 1;
    //         strs = [item];
    //         return
    //     };
    //     strs.push(item);
    //     length += 1;
    // });
    // lengths.push(length);
    // return Math.max(...lengths);
// };

var lengthOfLongestSubstring = function (s){
    if(!s || s.length<=1) return s.length;
    let strs = [];
    let maxLength = 0;
    for(let i in s){
        let index = strs.indexOf(s[i]); // 获取重复位置下标
        if(~index) strs = strs.splice(index+1);
        strs.push(s[i])
        maxLength = Math.max(strs.length,maxLength); // 比较长度
    };
    return maxLength;
}

var lengthOfLongestSubstring = function (s){
    let strs = [];
    let maxLength = 0;
    for(let i in s){
        while(strs.includes(s[i])) strs.shift();  // 删除直到无重复
        strs.push(s[i])
        maxLength = Math.max(strs.length,maxLength); // 比较长度
    };
    return maxLength;
}