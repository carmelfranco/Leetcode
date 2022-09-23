/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// T- O(long n), S - O(1)
var lowestCommonAncestor = function(root, p, q) {
    let curr=root;// temporary pointer
    while(curr){
        if(p.val>curr.val && q.val>curr.val){// if the P and Q values are Greater than the curr, change the curr to right
            curr=curr.right;
        }else if(p.val<curr.val && q.val<curr.val){ //  If P and Q values are Lesser than the curr, change the curr to left
            curr=curr.left;
        }else{
            return curr; // exactly values matched
        }
    }
};