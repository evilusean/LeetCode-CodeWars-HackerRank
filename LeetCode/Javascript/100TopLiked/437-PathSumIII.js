/*
https://leetcode.com/problems/path-sum-iii/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path 
equals targetSum.
The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent 
nodes to child nodes).

Example 1:
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

Example 2:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
 
Constraints:
The number of nodes in the tree is in the range [0, 1000].
-109 <= Node.val <= 109
-1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {number}
 */
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to calculate the number of paths that sum to a given value.
function pathSum(root, targetSum) {
    // Map to keep the cumulative sum and its frequency.
    const prefixSumCount = new Map();

    // Helper function to perform DFS on the tree and calculate paths.
    const dfs = (node, currentSum) => {
        if (!node) {
            return 0;
        }
        // Update the current sum by adding the node's value.
        currentSum += node.val;

        // Get the number of times we have seen the currentSum - targetSum.
        let pathCount = prefixSumCount.get(currentSum - targetSum) || 0;

        // Update the count of the current sum in the map.
        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);

        // Explore left and right subtrees.
        pathCount += dfs(node.left, currentSum);
        pathCount += dfs(node.right, currentSum);

        // After returning from the recursion, decrement the frequency of the current sum.
        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) - 1);

        // Return the total count of paths found.
        return pathCount;
    };

    // Initialize the map with base case before the recursion.
    prefixSumCount.set(0, 1);

    // Start DFS from the root node with an initial sum of 0.
    return dfs(root, 0);
}