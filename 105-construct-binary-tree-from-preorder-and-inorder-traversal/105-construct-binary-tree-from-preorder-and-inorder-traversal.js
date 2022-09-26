/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// T-O(n), space complexity(n*n)
/*var buildTree = function(preorder, inorder) {
    if(preorder.length==0 || inorder.length==0) return null;
    
    let root=new TreeNode(preorder[0]);
    let mid=inorder.indexOf(preorder[0]);
    root.left= buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid));
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1));
    
    return root;
    
};*/
/* time Complexity - O(n), space complexity O(n)*/
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) {
        return null;
    }
    const inorderMap = {};
    let curPreIdx = 0;
    for(let i = 0; i < inorder.length; i++) {
        inorderMap[inorder[i]] = i;
    }
    function dfs(i, j) {
        const node = new TreeNode(preorder[curPreIdx]);
        const curInIdx = inorderMap[preorder[curPreIdx]];
        curPreIdx++;
        if (i <= curInIdx - 1) {
            node.left = dfs(i, curInIdx - 1);
        }
        if (curInIdx + 1 <= j) {
            node.right = dfs(curInIdx + 1, j);
        }
        return node;
    }
    return dfs(0, preorder.length - 1);
}