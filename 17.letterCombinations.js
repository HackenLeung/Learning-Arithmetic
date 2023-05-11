// 电话号码的字母组合

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


// 示例 1：
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

// 示例 2：
// 输入：digits = ""
// 输出：[]

// 示例 3：
// 输入：digits = "2" 

// 提示：
// 0 <= digits.length <= 4
// digits[i] 是范围 ['2', '9'] 的一个数字。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length <=0) return []
    let letter = {
        1:'',
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    let arr = [];
    var backtrack = (string,index) =>{
        if(index === digits.length) arr.push(string);
        else letter[digits[index]].split('').map(item=> backtrack(string+item,index+1))
    }
    backtrack('', 0)
    // 返回结果
    return arr
};
console.log(letterCombinations(''),'ss');

function letterCombinations2(digits) {
    // 如果没有数字直接返回
    if (digits.length == 0) return []
    // 电话号码对应的字母表示(mark[number-1]，例子：电话号码2，对应mark[2-1]=['a', 'b', 'c'])
    const mark = [
        [''],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]
    // 记录电话号码字母组合数组
    var recordArray = []
    /**
     * @description: 回溯函数
     * @author: JunLiangWang
     * @param {*} cuString  上一次字母组合字符串
     * @param {*} index     当前遍历到的digits索引
     * @return {*}
     */
    var backtrack = function (cuString, index) {
        // 如果遍历完成digits所有字符，则向记录数组添加上一次字母组合的字符串
        if (index == digits.length) recordArray.push(cuString)
        // 如果没有，则找出当前电话号码对应的字母进行遍历(mark[number-1]，
        // 例子：电话号码2，对应mark[2-1]=['a', 'b', 'c'])，并继续调用
        // 回溯函数(参数1：上一次字母组合的字符串+这次对应的字母，参数2：索引+1)
        // 直到遍历完成digits为止
        else mark[digits[index] - 1].map((word) => backtrack(cuString + word, index + 1))
    }
    // 调用回溯函数
    backtrack('', 0)
    // 返回结果
    return recordArray
}

// console.log(letterCombinations2('234'));