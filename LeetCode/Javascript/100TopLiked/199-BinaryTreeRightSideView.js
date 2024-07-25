/*
https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // If the tree is empty, return an empty array
    if (root === null) {
        return [];
    }
    // Initialize an empty array to store the right side view
    let rightView = [];
    // Initialize a queue to store nodes during level-order traversal
    let queue = [root];
    // Iterate through each level of the tree
    while (queue.length > 0) {
        // Get the size of the current level (number of nodes to process)
        let levelSize = queue.length;
        // Iterate through each node at the current level
        for (let i = 0; i < levelSize; i++) {
            // Dequeue the first node from the queue, this is the current node
            let current = queue.shift();
            // If this is the last node at the current level, add its value to the right side view
            if (i === levelSize - 1) {
                rightView.push(current.val);
            }
            // Enqueue the left and right children of the current node if they exist
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }
    // Return the right side view of the tree
    return rightView;
};