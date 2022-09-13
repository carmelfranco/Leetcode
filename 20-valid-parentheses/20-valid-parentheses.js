/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    for(char of s){
        stack.push(char);
        if(stack.length>=2){
             let open=stack[stack.length-2], close=stack[stack.length-1];
             let br=open+close;
            if(br=="()" || br=="{}" || br=="[]"){
                stack.pop();
                stack.pop();
            }
        }
    }
    
    return stack.length==0;
};