/*
https://leetcode.com/problems/implement-trie-prefix-tree/description/?envType=study-plan-v2&envId=top-100-liked
A trie (pronounced as "try") or prefix tree is a tree data structure used to 
efficiently store and retrieve keys in a dataset of strings. 
There are various applications of this data structure, such as autocomplete and 
spellchecker.

Implement the Trie class:
Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie 
    (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously 
    inserted string word that has the prefix prefix, and false otherwise.

Example 1:
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

Constraints:
1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.
*/
var Trie = function() {
    this.children = {}; // Hash map to store child nodes, representing characters
    this.isWordEnd = false; // Flag to indicate if a word ends at this node
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this; // Start from the root node
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
            node.children[char] = new Trie(); // Create a new node for the character if it doesn't exist
        }
        node = node.children[char]; // Move to the child node representing the current character
    }
    node.isWordEnd = true; // Mark the current node as the end of a word
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this; // Start from the root node
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
            return false; // If the character is not found in the trie, the word doesn't exist
        }
        node = node.children[char]; // Move to the child node representing the current character
    }
    return node.isWordEnd; // Return true if the last node is marked as the end of a word, false otherwise
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this; // Start from the root node
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!node.children[char]) {
            return false; // If the character is not found in the trie, no word starts with the given prefix
        }
        node = node.children[char]; // Move to the child node representing the current character
    }
    return true; // If we reach this point, it means all characters of the prefix exist in the trie
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
