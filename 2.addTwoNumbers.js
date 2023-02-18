// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 创建临时的链表
    let resNode = new ListNode(0);
    // 记录好相关的临时链表信息
    let res = resNode;
    // 记录是否进行进位运算
    let flag = 0;
    //当l1不为空或l2不为空或不需要进位时
    while(l1 || l2 || flag) {
        // 记录其相关的值
        let val1 = l1?l1.val:0;
        let val2 = l2?l2.val:0;
        let sum = val1 + val2 + flag;
        //判断是否需要进位
        flag = sum >= 10 ? 1 : 0;
        //链表所存储的元素只能为余数
        sum = sum % 10;
        //当相关的链表不为空时，则链表一次向下遍历
        if(l1) {
            l1 = l1.next;
        }
        if(l2) {
            l2 = l2.next;
        }
        //向临时创建的链表追加元素
        resNode.next = new ListNode(sum);
        resNode = resNode.next;
    }
    return res.next;
};


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   
};
