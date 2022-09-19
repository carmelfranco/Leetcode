/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow=0, fast =0;
    while(1){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow==fast){
            break;
        }
    }
    let slow2=0;
    while(1){
        slow2=nums[slow2];
        slow=nums[slow];
        if(slow==slow2){
            return slow;
        }
    }
};