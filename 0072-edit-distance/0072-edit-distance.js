/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// T- O(m*n) , S- O(m*n)
var minDistance = function(word1, word2) {
    let cache=Array(word1.length+1).fill().map(()=>Array(word2.length+1).fill(Number.MAX_VALUE));
    
    for(let j=0;j<=word2.length;j++){
        cache[word1.length][j]=word2.length-j;
    }
    for(let i=0;i<=word1.length;i++){
        cache[i][word2.length] = word1.length -i;
    }
    
    for(let i=word1.length-1;i>=0;i--){
        for(let j=word2.length-1;j>=0;j--){
            if(word1[i]==word2[j]){
                cache[i][j] = cache[i+1][j+1];
            }else{
                cache[i][j] = 1+Math.min(cache[i+1][j],cache[i][j+1],cache[i+1][j+1]);
            }
        }
    }
    
    return cache[0][0];
};