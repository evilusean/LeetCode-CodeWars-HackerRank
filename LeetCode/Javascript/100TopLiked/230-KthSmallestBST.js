/*
https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary search tree, and an integer k, 
return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3

Output: 3

Constraints:
The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently,
 how would you optimize?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;
    
    const inorderTraversal = (node) => {
        if (node === null) {
            return;
        }
        inorderTraversal(node.left);
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        inorderTraversal(node.right);
    };
    
    inorderTraversal(root);
    return result;
};