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
// T-O(n), S-O(n), recursive DFS
var isValidBST = function(root) {
    function valid(node,left,right){ 
        if(!node) return true; // Null Node
        
        if(!(node.val>left && node.val<right)) return false; // is nor Valid, return false
        
        return valid(node.left,left,node.val) && valid(node.right,node.val,right); // check for Both left and right nodes
    }
    
    return valid(root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY);// Call the function with Negative and positive Infinity
};