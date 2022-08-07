/* Using Map and Time Complexity of O(n) and space complexity of O(n) */
/*func isAnagram(s string, t string) bool {
    if len(s)!=len(t) {
        return false
    }
    
    m1:=make(map[byte]int)
    m2:=make(map[byte]int)
    
    for i:=0;i<len(s);i++ {       
        m1[s[i]]++
        m2[t[i]]++
    }
    
    for key,value := range m1 {
        if m2[key]!=value {
            return false
        }
    }
    
    return true
}*/

/* Using Sort , Time Complexity of n log n and Space complexity of O(1) */
import ("strings"
        "sort")
func SortRuneSlice( w string) []rune{
    var r []rune
    for _, runeValue := range w {
        r = append(r,runeValue)
        
    }
    return r
}
func SortString( w string) string{
    r:=SortRuneSlice(w)
    sort.Slice(r, func(i, j int) bool {
		return r[i] < r[j]
	})
	return string(r)
}
func isAnagram(s string, t string) bool {
    if len(s)!=len(t) {
        return false
    }
    s=SortString(s)
    t=SortString(t)
    
    if(s!=t){
        return false
    }
  
    return true
}

