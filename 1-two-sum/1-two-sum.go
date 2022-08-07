func twoSum(nums []int, target int) []int {
    m:=make(map[int]int)
    for i:=0;i<len(nums);i++ {
        b:=target-nums[i]
        if j,ok :=m[b]; ok {
            return []int{i,j}
        }
        m[nums[i]]=i
    }
    return []int{-1,-1}
}