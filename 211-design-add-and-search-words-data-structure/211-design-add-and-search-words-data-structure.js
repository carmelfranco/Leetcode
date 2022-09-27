class TrieNode{// Trie Class
    constructor(){
        this.end=false; // indicates the leaf node
        this.children={};// map of children nodes
    }
}
var WordDictionary = function() {
    this.root = new TrieNode(); // Iniitalize the Root
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr=this.root; // set the curr to Root pointer
    for(let i=0;i<word.length;i++){ // Loop intil end of the word
        if(curr.children[word[i]]===undefined){ // if the map does not exists, create
            curr.children[word[i]] = new TrieNode();
        }
        curr=curr.children[word[i]]; // move the curr pointer to the current word
    }
    curr.end=true; // set the last character as end
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let result=false; // global variable
    
    function helper(node,str,i){
        // Base case
        if(str.length==i){ // if it's end of the search string
            if(node.end){
                result=true;                
            }
            return;
        }
        // recursive case
        if(str[i]==="."){ //  if the characte found is . then interate through all children
            for(let key in node.children){
                helper(node.children[key],str,i+1);
                if(result){
                    return true;
                }
            }
        }else{ // characters from a-z
            if(node.children[str[i]]){
                 helper(node.children[str[i]],str,i+1);
            }           
        }
    }
    
    helper(this.root,word,0);
    
    return result;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */