
var Trie = function() {
    this.root={}; //  Initialize the Root object
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root; // get the Root pointer
    for(let letter of word){ // Iterate through each letter
        if(node[letter]==undefined) node[letter]={}; // if the node not found, then create
        node=node[letter]; // advance to the next node
    }
    node.isEnd=true; // set the last node as end
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;// get the root pointer
    for(let letter of word){ // iterate through each word
        if(node[letter]==undefined) return false; // if the current letter is not found, return false
        node=node[letter]; // advance to next node
    }
    
    return node && node.isEnd===true; // return the value if the seaching letter is the last and matching every letter
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root; //  get the root pointer
    for(let letter of prefix){
        if(node[letter]===undefined) return false;
        node=node[letter];
    }
    return true; //  if all the prefix are mathching, return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */