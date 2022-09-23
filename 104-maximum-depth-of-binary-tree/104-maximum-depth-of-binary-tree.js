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
// recursive DFS - T - O(n), S - O(n)
/*var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    // add the current element with Maximum depth of Left and right
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
};*/
// iterative BFS , T- O(n), S- O(n)
/*var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    let q=[root];
    let level=0;    
    while(q.length){
        let len=q.length;
        level++; // Increment the level
        while(len--){// loop until the length of the queue
            let node=q.shift(); // get the node at index 0 and remove the element from the array
            if(node.left){
                q.push(node.left);// if the Left node is valid, add it to the queue
            }
            if(node.right){
                q.push(node.right);// if the Right node is valid, add it to the queue
            }
        }
    }
    
    return level;// return the level
}*/
// interative DFS, T- O(n), S- O(n)
var maxDepth = function(root) {    
    let stack=[{"node":root,"depth":1}], level =0;    // Set the stack with the current initial depth of 1
    while(stack.length){ // Loop until the stack length
        let obj=stack.pop(); //  get and remove the last element in the array
        let node=obj.node; 
        let depth = obj.depth;        
        if(node){ // if the node is valid
            level=Math.max(level,depth); // take the maximum of depth values
            stack.push({"node":node.left,"depth":depth+1}); // Push Left node into the stack
            stack.push({"node":node.right,"depth":depth+1}); // Push right node into the stack
        }
    }
    
    return level;
}