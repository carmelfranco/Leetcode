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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// recursive DFS, T-O(m*n), S-O(m*n)
var isSubtree = function(s, t) {
    if(!t) return true; // if sub tree is null then it's part of the main tree
    if(!s) return false; // if the Tree is null then subree is false
    if(isSameTree(s,t)) return true; // check if they are the same tree by comparing each nodes
    
    return isSubtree(s.left,t) || isSubtree(s.right,t); // check if the left sub tree OR right sub tree satisfies the subtree comparision
};

function isSameTree(s,t){
    if(!s && !t) return true;// if Both are null then they are subtree of another
    if(s && t && s.val == t.val){ // if all the values are matching, then they are subtree 
        return isSameTree(s.left,t.left) && isSameTree(s.right,t.right); 
    }
    return false;
}