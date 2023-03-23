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
// 输出：["a","b","c"]

// 提示：
// 0 <= digits.length <= 4
// digits[i] 是范围 ['2', '9'] 的一个数字。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return []
    if(digits.length <=1) return digits.split('');
    let res = [];
    let letter = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    let index = 0;
    let item = digits[index]; // 2
    let str = letter[item][i]
    while(index <= digits.length-1){
        let i = 0;
        while(i<=letter[item].length-1){
            let nextItem = digits[index+1]; // 3
            if(!nextItem) break;
            str+=letter[nextItem][i]
            i++
            if(str.length>=digits.length-1) {
                res.push(str);
                str = letter[item][0]
            }
        }
        index++
    }
    console.log(res,'ssss');
};

console.log(letterCombinations('23'));