/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// T-O(n), S- O(n)
var cloneGraph = function(node) {
    let map={};
    if(!node) return node;
    
    function traverse(node){
        if(!node) return node;
        if(!map[node.val]){
            const newnode = new Node(node.val);
            map[node.val]=newnode;
            newnode.neighbors = node.neighbors.map(traverse);
        }
        
        return map[node.val];
    }
    
    return traverse(node);
};