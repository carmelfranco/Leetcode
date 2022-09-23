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
var maxDepth = function(root) {
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
}
