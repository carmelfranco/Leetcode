/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let closetoopen={")":"(","}":"{","]":"["};
    
    for( c of s){
        if(closetoopen[c]){
            if(stack.length && stack[stack.length-1] ==closetoopen[c]){
                stack.pop();
            }else{
                return false;
            }
        }else{
            stack.push(c);
        }
    }
    
    return stack.length==0;
};