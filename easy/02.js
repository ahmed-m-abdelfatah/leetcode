/*
Link:
https://leetcode.com/problems/merge-two-sorted-lists/

Description:
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list = new ListNode();
  let head = list;

  while (list1 !== null && list2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (list1.val < list2.val) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    list = list.next;
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (list1 !== null) list.next = list1;
  if (list2 !== null) list.next = list2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};

/*
Done before 20m = false
-------------------------------------------------------------
More info:

Algorithms - Full Course In Arabic
شرح الـ linked list في الـ data structure
https://www.youtube.com/playlist?list=PLsGJzJ8SQXTeekVrjC0Nq3xGq1pXi6cQO
*/
