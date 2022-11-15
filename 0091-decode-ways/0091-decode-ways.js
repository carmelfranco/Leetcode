/**
 * @param {string} s
 * @return {number}
 */
// T- O(n), S- O(n)
var numDecodings = function(s) {
    return decode(s);
};
// Counting Problem
// f(1)=> if s[0]== 0 then 0 else 1
// f(2)=> 2 + f(1)
function decode(s){
    let table=Array(s.length+1);
    table[0]=1;
    
    if(s[0]=="0"){
        table[1]=0;
    }else{
        table[1]=1;
    }
    
    for(let i=2;i<=s.length;i++){
        let second=s[i-1], first = s[i-2];
        table[i]=0;
        if(second!="0"){
            table[i]+=table[i-1];
        }
        if(
        
            first =="1" || (
            
                            first =="2"
                            &&
                            (second =="0" || second =="1"|| second=="2" || second=="3" || second=="4" || second=="5" || second=="6")
            )
        ){
            table[i]+=table[i-2];
        }
    }
    
    return table[s.length];
}