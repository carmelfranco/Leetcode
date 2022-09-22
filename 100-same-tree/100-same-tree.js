/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// Time Complexity O(p+q), space complexity O(p+q)
var isSameTree = function(p, q) {
    if(p==null && q==null){ // Both of them are null
        return true;
    }
    if(!p || !q || p.val !=q.val){ //  if either one of them are null OR thier values are not equal
        return false;
    }
    
    return isSameTree(p.left,q.left) && isSameTree(p.right , q.right);// do this recursively for both left and right nodes
};