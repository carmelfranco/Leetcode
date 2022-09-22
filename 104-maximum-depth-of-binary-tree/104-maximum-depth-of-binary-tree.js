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
 * @return {number}
 */
// time Complexity O(n), space complexity O(n)
var maxDepth = function(root) {
    //base case
    if(!root) return 0;    
    // current node + Maximum of the Left sub tree or Right sub tree
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
};