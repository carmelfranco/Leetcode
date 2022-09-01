/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[];
    for(let char of tokens){
        switch(char){
            case '+':
                 stack.push(stack.pop()+stack.pop());
            break;
            case '*':
                stack.push(stack.pop()*stack.pop());
            break;
            case '-':
                let a=stack.pop();
                let b=stack.pop();
                stack.push(b-a);
            break;
            case '/':
                let c=stack.pop();
                let d=stack.pop();
                let tmp=d/c;
                tmp=tmp<0?Math.ceil(tmp):Math.floor(tmp);
                stack.push(tmp);
            break;
            default:
                stack.push(Number(char));
            
        }
    }
    
    return stack.pop();
};