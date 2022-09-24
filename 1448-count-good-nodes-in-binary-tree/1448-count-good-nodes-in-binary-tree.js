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
// dfs, T-O(n), S-O(h)~ O(n)
var goodNodes = function(root) {
    function dfs(node,maxval){
        let good=0;
        if(!node) return 0;
        if(node.val>=maxval) good++;
        
        maxval=Math.max(node.val,maxval);
        
        if(node.left) good+=dfs(node.left,maxval);
        if(node.right) good+=dfs(node.right,maxval);
        
        return good;
    }
    
    return dfs(root,root.val);
};