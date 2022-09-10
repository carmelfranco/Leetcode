/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combinedarray=nums1.concat(nums2);
    combinedarray.sort((a,b)=>(a-b));
    let total=combinedarray.length, median=0.0;
    
    if(total%2==1){
        median=combinedarray[Math.floor(total/2)];
    }else{
        median=(combinedarray[Math.floor(total/2)]+combinedarray[Math.floor(total/2)-1])/2;
    }
    
    return median;
};