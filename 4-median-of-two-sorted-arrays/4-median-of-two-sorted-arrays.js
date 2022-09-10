/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Brute Force Time Complexity O(n *n), space complexity O(n+m)
/*var findMedianSortedArrays = function(nums1, nums2) {
    let combinedarray=nums1.concat(nums2);
    combinedarray.sort((a,b)=>(a-b));
    let total=combinedarray.length, median=0.0;
    
    if(total%2==1){
        median=combinedarray[Math.floor(total/2)];
    }else{
        median=(combinedarray[Math.floor(total/2)]+combinedarray[Math.floor(total/2)-1])/2;
    }
    
    return median;
};*/

// Time Complexity O(m+n), space complexity O(1)
var findMedianSortedArrays = function(nums1, nums2) {

    let total=nums1.length+nums2.length;
    let median=0.0, half=0, i=0, j=0, ifEven=false;
    
    if(total%2==1){
        half=Math.floor(total/2)+1;
    }else{
        half=Math.floor(total/2);
        ifEven = true;
    }
    
    for(let itr=0;itr<half;itr++){
        if(i>=nums1.length){
            median=nums2[j];
            j++;
            continue;
        }else if(j>=nums2.length){
            median=nums1[i];
            i++;
            continue;
        }
        if(nums1[i]<=nums2[j]){
            median=nums1[i];
            i++;
        }else{
            median=nums2[j];
            j++;
        }
    }
    
    if(ifEven){
        let next;
        if(i>=nums1.length){
            next=nums2[j];            
        }else if(j>=nums2.length){
            next=nums1[i];            
        }else{
            next=Math.min(nums1[i],nums2[j]);
        }
        median=(median+next)/2;
    }

    return median;
}
