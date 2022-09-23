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
 * @return {number[][]}
 */
// T- O(n), S - O(n)
var levelOrder = function(root) {
    let result=[];
    if(!root) return result;
    let q=[root];
    while(q.length){
        let len=q.length;
        let level=[];
        while(len--){
            let node=q.shift();
            if(node){
                level.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
        }
        result.push(level);
    }
    
    return result;
};