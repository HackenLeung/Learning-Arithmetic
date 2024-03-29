// N 字形变换

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R

// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
//  

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"

// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(!s || s.length<=1) return s; // 空和一个字符串不用处理
    if(numRows<=1) return s; // 1行不用处理
    let cont = []; // 输出每个内容为一行
    let index = 0; // 下标
    let isBack = false; // 是否返回行
    let nowRow = 0; // 当前行
    while(index<=s.length-1){
        if(!cont[nowRow]) cont.push(''); // 没有先创建
        cont[nowRow]+=s[index]; // 拼接当前内容
        isBack? nowRow--: nowRow++;
        if(nowRow>=numRows-1) isBack = true; // 触底返回
        else if(nowRow<=0) isBack = false; // 顶部返回
        index++
    }
    return cont.join(''); // 拼接行
};

console.log(convert('PAYPALISHIRING',4),'??');