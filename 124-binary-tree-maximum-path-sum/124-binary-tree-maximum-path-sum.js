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
// T-= O(n) , S-O(n)
var maxPathSum = function(root) {
    let res=root.val;
    function dfs(node){
        if(!node) return 0;
        let lmax=dfs(node.left);
        let rmax=dfs(node.right);
        
        lmax=Math.max(lmax,0);
        rmax=Math.max(rmax,0);
        
        res=Math.max(res,node.val+lmax+rmax);
        
        return node.val+Math.max(lmax,rmax);
    }
    
    dfs(root);
    
    return res;
};