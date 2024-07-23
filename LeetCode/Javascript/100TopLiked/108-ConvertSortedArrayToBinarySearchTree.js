/*
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // If the input array nums is empty, return null as there's no tree to construct.
    if (nums.length === 0) {
        return null;
    }
    
    // Calculate the middle index mid of the array. This will be the root node of the BST.
    const mid = Math.floor(nums.length / 2);
    // Create a new TreeNode with the value at the middle index (nums[mid]).
    const root = new TreeNode(nums[mid]);
    
    // Recursively call sortedArrayToBST with the left half of the array (nums.slice(0, mid)) to construct the left subtree.
    root.left = sortedArrayToBST(nums.slice(0, mid));
    // Recursively call sortedArrayToBST with the right half of the array (nums.slice(mid + 1)) to construct the right subtree.
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    // Return the constructed root node.
    return root;
};