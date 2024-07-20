/*
https://leetcode.com/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // If the root is null, the tree is empty, so return an empty array
    if (root === null) {
        return [];
    }
    // Initialize an empty array to store the level order traversal result
    let result = [];
    // Initialize a queue to store nodes during traversal, starting with the root node
    let queue = [root];
    // Iterate while the queue is not empty
    while (queue.length > 0) {
        // Initialize an empty array to store the nodes at the current level
        let level = [];
        // Get the size of the current level (number of nodes to process)
        let levelSize = queue.length;
        // Iterate through each node at the current level
        for (let i = 0; i < levelSize; i++) {
            // Dequeue the first node from the queue, this is the current node
            let current = queue.shift();
            // Add the value of the current node to the level array
            level.push(current.val);
            // If the current node has a left child, enqueue it to the queue for processing in the next level
            if (current.left !== null) {
                queue.push(current.left);
            }
            // If the current node has a right child, enqueue it to the queue for processing in the next level
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
        // Add the level array (containing values of nodes at the current level) to the result array
        result.push(level);
    }
    // Return the result array containing the level order traversal of the tree
    return result;
};