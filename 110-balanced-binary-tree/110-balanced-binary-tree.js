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
// Time Complexity O(n), space complexity O(n)
var isBalanced = function(root) {
    
    function dfs(node){
        if(!node) return ({"balanced":true,"height":0});
        let left = dfs(node.left);
        let right = dfs(node.right);
        let balanced = left.balanced && right.balanced && Math.abs(left.height-right.height)<=1;
        
        return {"balanced":balanced,"height":1+Math.max(left.height,right.height)};
    }
    
    return dfs(root).balanced;
};