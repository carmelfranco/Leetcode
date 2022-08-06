func containsDuplicate(nums []int) bool {
    m:=make(map[int]int);
    for i:=0;i<len(nums);i++ {
        b:=nums[i]
        if _, ok:=m[b]; ok {
            return true
        }
        m[b]=i
    }
    
    return false
}