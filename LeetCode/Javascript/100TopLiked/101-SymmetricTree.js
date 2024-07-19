/*
https://leetcode.com/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
 
Constraints:
The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100

Follow up: Could you solve it both recursively and iteratively?
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // If the root is null, the tree is symmetric
    if (root === null) {
        return true;
    }
    // Define a recursive helper function to check if two subtrees are symmetric
    const isSymmetricHelper = (left, right) => {
        // If both subtrees are null, they are symmetric
        if (left === null && right === null) {
            return true;
        }
        // If one subtree is null and the other is not, they are not symmetric
        if (left === null || right === null) {
            return false;
        }
        // If the values of the two nodes are different, they are not symmetric
        if (left.val !== right.val) {
            return false;
        }
        // Recursively check if the left subtree of the left node is symmetric to the right subtree of the right node
        // and if the right subtree of the left node is symmetric to the left subtree of the right node
        return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
    };
    // Call the helper function to check if the left and right subtrees of the root are symmetric
    return isSymmetricHelper(root.left, root.right);
};