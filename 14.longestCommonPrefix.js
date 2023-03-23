// 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 提示：
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let index = 0;
    let str = '';
    while (index <= strs[0].length) {
        let nowStr = str + strs[0][index]
        let isSame = strs.every(item => item.indexOf(nowStr) === 0); // 匹配前綴是否相同
        if (isSame) str = nowStr; // 相同覆蓋
        else break
        index++
    }
    return str
};

// console.log(longestCommonPrefix([""]));