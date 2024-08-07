/*
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/?envType=study-plan-v2&envId=top-100-liked
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between 
two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be 
a descendant of itself).”

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [1,2], p = 1, q = 2
Output: 1

Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // If the root is null, there's no LCA, so return null
    if (root === null) {
        return null;
    }
    // If we find either p or q, we've reached one of the target nodes
    if (root === p || root === q) {
        return root;
    }
    // Recursively search for p and q in the left subtree
    let left = lowestCommonAncestor(root.left, p, q);
    // Recursively search for p and q in the right subtree
    let right = lowestCommonAncestor(root.right, p, q);
    // If both left and right are not null, it means we found p and q in different subtrees,
    // so the current node is the LCA
    if (left !== null && right !== null) {
        return root;
    }
    // If only one of left or right is not null, it means we found one of the target nodes in that subtree,
    // so the LCA is the node in that subtree
    if (left !== null) {
        return left;
    }
    if (right !== null) {
        return right;
    }
    // If both left and right are null, it means neither p nor q was found in the current subtree,
    // so return null
    return null;
};