/*
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder 
traversal of the same tree, construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]

Constraints:
1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // If either preorder or inorder is empty, return null (empty tree)
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    
    // Create a map to store the index of each value in the inorder array
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    
    // Define a recursive helper function to build the tree
    const build = (preorderStart, preorderEnd, inorderStart, inorderEnd) => {
        // Base case: If the preorder start index is greater than the preorder end index, return null (empty subtree)
        if (preorderStart > preorderEnd) {
            return null;
        }
        
        // The first element in the preorder array is the root of the current subtree
        const rootVal = preorder[preorderStart];
        const root = new TreeNode(rootVal);
        
        // Find the index of the root value in the inorder array
        const rootIndex = inorderMap.get(rootVal);
        
        // Recursively build the left subtree
        root.left = build(preorderStart + 1, preorderStart + (rootIndex - inorderStart), inorderStart, rootIndex - 1);
        // Recursively build the right subtree
        root.right = build(preorderStart + (rootIndex - inorderStart) + 1, preorderEnd, rootIndex + 1, inorderEnd);
        
        // Return the constructed root node
        return root;
    };
    
    // Call the helper function to build the entire tree
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};