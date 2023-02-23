// 最长回文子串

// 给你一个字符串 s，找到 s 中最长的回文子串。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

//  

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
//  

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成

/**
 * @param {string} s
 * @return {string}
 */
// 超出时间限制 4000ms
// var longestPalindrome = function(s) {
//     if(!s || s.length<=1) return s;
//     let index = s.length;
//     let lindex = 0;
//     let curLength = [];
//     while(index){
//         while(lindex+index<=s.length){
//             let str = s.split('').slice(lindex,lindex+index);
//             let res = s.split('').slice(lindex,lindex+index).reverse();
//             if(str.toString() === res.toString()){
//                 if(curLength.length<str.length) curLength = str;
//             }
//             lindex++
//         }
//         lindex = 0;
//         index --
//     }
//     return curLength.reduce((tol,cur)=>tol+cur,'')
// };

// 超出时间限制 1000ms 长到短
// var longestPalindrome = function (s) {
//     if (!s || s.length <= 1) return s;
//     let index = s.length;
//     let lindex = 0;
//     let curLength = '';
//     while (index) {
//         let str = s.slice(lindex, lindex + index);

//         let resIndex = str.length;
//         let resStr = '';
//         while (resIndex) {
//             resIndex--
//             resStr += s[resIndex + lindex]
//         }
//         if (str === resStr) {
//             curLength = str;
//             index = 0
//         }
//         lindex++
//         if (lindex + index > s.length) {
//             lindex = 0;
//             index--
//         }
//     }
//     return curLength
// };

// 中心扩散
var longestPalindrome = function (s) {
    if (!s || s.length <= 1) return s;
    let index = s.length;
    let lindex, rindex;
    let resStr = '';
    while (index) {
        lindex = index;
        rindex = index;
        // 左扩散
        while (lindex && s[lindex - 1] === s[index]) {
            lindex--
        }
        // 右扩散
        while (rindex < s.length - 1 && s[index] === s[rindex + 1]) {
            rindex++
        }
        // 左右同时扩散
        while (lindex && rindex < s.length - 1 && s[lindex - 1] === s[rindex + 1]) {
            lindex--
            rindex++
        }
        let curStr = s.slice(lindex, rindex + 1);
        if ((curStr.length > resStr.length)) resStr = curStr;
        index--
    }
    return resStr
};


// console.log(longestPalindrome("babad"), '??');

// console.log(longestPalindrome("whdqcudjpisufnrtsyupwtnnbsvfptrcgvobbjglmpynebblpigaflpbezjvjgbmofejyjssdhbgghgrhzuplbeptpaecfdanhlylgusptlgobkqnulxvnwuzwauewcplnvcwowmbxxnhsdmgxtvbfgnuqdpxennqglgmspbagvmjcmzmbsuacxlqfxjggrwsnbblnnwisvmpwwhomyjylbtedzrptejjsaiqzprnadkjxeqfdpkddmbzokkegtypxaafodjdwirynzurzkjzrkufsokhcdkajwmqvhcbzcnysrbsfxhfvtodqabvbuosxtonbpmgoemcgkudandrioncjigbyizekiakmrfjvezuzddjxqyevyenuebfwugqelxwpirsoyixowcmtgosuggrkdciehktojageynqkazsqxraimeopcsjxcdtzhlbvtlvzytgblwkmbfwmggrkpioeofkrmfdgfwknrbaimhefpzckrzwdvddhdqujffwvtvfyjlimkljrsnnhudyejcrtrwvtsbkxaplchgbikscfcbhovlepdojmqybzhbiionyjxqsmquehkhzdiawfxunguhqhkxqdiiwsbuhosebxrpcstpklukjcsnnzpbylzaoyrmyjatuovmaqiwfdfwyhugbeehdzeozdrvcvghekusiahfxhlzclhbegdnvkzeoafodnqbtanfwixjzirnoaiqamjgkcapeopbzbgtxsjhqurbpbuduqjziznblrhxbydxsmtjdfeepntijqpkuwmqezkhnkwbvwgnkxmkyhlbfuwaslmjzlhocsgtoujabbexvxweigplmlewumcone"), '??');
