/*
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
Given the root of a binary tree, flatten the tree into a "linked list":
The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer
 is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Example 1:
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [0]
Output: [0]

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
Follow up: Can you flatten the tree in-place (with O(1) extra space)?
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
/*
Explanation:

Base Case: If the root is null (empty tree), there's nothing to flatten, so we return.

Recursive Calls:

flatten(root.left): Recursively flatten the left subtree.
flatten(root.right): Recursively flatten the right subtree.
In-place Modification:

right = root.right: Store the original right subtree of the current node in a temporary variable right.
root.right = root.left: Connect the right subtree of the current node to the left subtree of the current node.
root.left = null: Set the left subtree of the current node to null.
Finding the Tail:

tail = root: Initialize a pointer tail to the current node.
while (tail.right !== null) { tail = tail.right; }: Traverse to the end of the flattened left subtree (which is now the right
 subtree of the current node).
Connecting the Tail:

tail.right = right: Connect the tail of the flattened left subtree to the original right subtree.
How it Works:

The algorithm performs a pre-order traversal of the tree. At each node, it flattens the left and right subtrees recursively. 
Then, it connects the right subtree to the left subtree, effectively merging them into a single right subtree. 
This process continues until the entire tree is flattened into a linked list.

Example:

Let's consider the tree:

     1
    / \
   2   5
  / \   \
 3   4   6
Flatten the left subtree:

flatten(2): This will flatten the subtree rooted at node 2, resulting in:
2 -> 3 -> 4 -> null
Flatten the right subtree:

flatten(5): This will flatten the subtree rooted at node 5, resulting in:
5 -> 6 -> null
Connect the right subtree to the left subtree:

root.right = root.left: This connects the right subtree of node 1 (which is now 2 -> 3 -> 4 -> null) to the left subtree of node 1 
(which is now null).
root.left = null: This sets the left subtree of node 1 to null.
Find the tail:

tail = root: The tail is initially set to node 1.
while (tail.right !== null) { tail = tail.right; }: This traverses to the end of the flattened left subtree, which is node 4.
Connect the tail to the original right subtree:

tail.right = right: This connects node 4 to the original right subtree of node 1, which is 5 -> 6 -> null.
The final flattened tree will be:

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
This is the same order as a pre-order traversal of the original tree.
*/
var flatten = function(root) {
    if (root === null) {
        return;
    }
    
    // Flatten the left subtree recursively
    flatten(root.left);
    // Flatten the right subtree recursively
    flatten(root.right);
    
    // Store the right subtree of the current node
    let right = root.right;
    // Connect the right subtree of the current node to the left subtree of the current node
    root.right = root.left;
    // Set the left subtree of the current node to null
    root.left = null;
    
    // Traverse to the end of the flattened left subtree
    let tail = root;
    while (tail.right !== null) {
        tail = tail.right;
    }
    // Connect the tail of the flattened left subtree to the original right subtree
    tail.right = right;
};
