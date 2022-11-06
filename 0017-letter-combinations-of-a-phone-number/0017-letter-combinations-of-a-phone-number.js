/**
 * @param {string} digits
 * @return {string[]}
 */
// T- O(4^n) , S-O(1)
var letterCombinations = function(digits) {
    let result=[];
    let digitToChar={
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    };
    const backtrack=(i,slate)=>{
        if(slate.length==digits.length){
            result.push(slate);
            return;
        }
        for(let char of digitToChar[digits[i]]){
            backtrack(i+1,slate+char);
        }
    }
    
    if(digits){
        backtrack(0,"");
    }
    return result;
};