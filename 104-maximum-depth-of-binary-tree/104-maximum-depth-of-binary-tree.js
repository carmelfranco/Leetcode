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
/*var maxDepth = function(root) {
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
}*/

// non -recursive, in order-DFS, Time Complexity O(n), space complexity O(n) 
var maxDepth = function(root) {
    let level=0;
    let stack=[{"node":root,"depth":1}];
    while(stack.length){
        let obj=stack.pop();
        let node=obj.node;
        let depth=obj.depth;          
        if(node){
            level=Math.max(level,depth);
            stack.push({"node":node.left,"depth":depth+1});
            stack.push({"node":node.right,"depth":depth+1});
        }
        
    }    
    return level;
}

