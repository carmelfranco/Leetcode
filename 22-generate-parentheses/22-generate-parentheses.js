/**
 * @param {number} n
 * @return {string[]}
 */
// Time Complexity 2 Pow n *2, space complexity 2 Pow n
/*const isValid=(str)=>{
    const stack=[];
    let i=0;
    let len=str.length;
    while(i<len){
        stack.push(str[i]);
        let open = stack[stack.length-2];
        let close = stack[stack.length-1];
        
        if(open+close=="()"){
            stack.pop();
            stack.pop();
        }
        i++;
    }
    
    return stack.length==0;
}
var generateParenthesis = function(n) {
    let result=[];
    //recursive Depth First search 
    const dfs=(i,n,slate)=>{
        if(i==n*2){
            if(isValid(slate.join(""))){
                result.push(slate.join(""));
            }
            
            return;
        }
        
        // recurive case
        
        // adding left parenthesis
        slate.push("(");
        dfs(i+1,n,slate);
        slate.pop();
        //adding right parenthesis
        slate.push(")");
        dfs(i+1,n,slate);
        slate.pop();
        
    }
    
    dfs(0,n,[]);
    
    return result;
};*/
var generateParenthesis = function(n) {

    let result=[];
    
    // depth first search
    dfs=(i,n,slate,ocount,ccount)=>{
        if(ccount>ocount || ocount>n){
            return;
        }
        
        if(i==n*2){
            result.push(slate.join(""));
            return;
        }
        
        // recursive case
        
        // adding Left parenthesis
        
        slate.push("(");
        dfs(i+1,n,slate,ocount+1,ccount);
        slate.pop();
        
        //adding right parenthesis
        
        slate.push(")");
        dfs(i+1,n,slate,ocount,ccount+1);
        slate.pop();
    }
    
    dfs(0,n,[],0,0);
    
    return result;

}
