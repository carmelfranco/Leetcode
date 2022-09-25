/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// TO(n), S- O(n)
var serialize = function(root) {
    let result=[];
    // Pre-Order traversal
    function dfs(node){
        if(!node){
            result.push("N"); // set Null values as N
            return;
        }
        result.push(node.val.toString()); // set Node Val first
        dfs(node.left); // then sent Left val
        dfs(node.right); // then sent Right val
        
    }    
    dfs(root);
    return result.toString(); // return final result Array as string
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let input=data.split(","); // from String create array
    let ind=0; // Initialize the array as 0
    function dfs(){
        if(input[ind]=="N"){ // If you find N, return 0
            ind++; // increment the Index
            return null;
        }
        let node = new TreeNode(Number(input[ind])); // Create Current Node
        ind++; // increment the Index
        node.left=dfs(); // set Left Node
        node.right=dfs(); // set Right Node
        
        return node; // return Node
    }
    
    return dfs(); // call the function to compute the Binary Tree
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */