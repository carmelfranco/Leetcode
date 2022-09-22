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
// Recursive DFS-->time Complexity O(n), space complexity O(n)
/*var maxDepth = function(root) {
    //base case
    if(!root) return 0;    
    // current node + Maximum of the Left sub tree or Right sub tree
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
};*/
//non recursive BFS--> Time Complexity O(n), space complexity O(n)
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    let q=[root];
    let level=0;
    while(q.length){
        let len=q.length;
        level++;
        while(len--){
            let node=q.shift();
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
    }
    
    return level;
}