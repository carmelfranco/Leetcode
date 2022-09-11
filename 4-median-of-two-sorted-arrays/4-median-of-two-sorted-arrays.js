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

// Time Complexity O((m+n)/2), space complexity O(1)
/*var findMedianSortedArrays = function(nums1, nums2) {

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
}*/
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length>nums2.length){
        nums1,nums2=nums2,nums1;
    }
    let m=nums1.length, n= nums2.length,k, mid,kthsmallest,succ;
    
    if((m+n)%2==1){ // m+n Totally Odd Number of elmenets
        k=Math.trunc((m+n)/2)+1;
    }else{ // m+n totally even Number of elements
        k=Math.trunc((m+n)/2);
    }
    const get=(arr,ind)=>{
        if(ind<0){
            return Number.NEGATIVE_INFINITY;
        }else if(ind>=arr.length){
            return Number.POSITIVE_INFINITY;
        }else{
            return arr[ind];
        }
    }
    
    let start=0, end=m-1;
    while(start<=end){
        mid=start+Math.trunc((end-start)/2);
        if(get(nums1,mid)>=get(nums2,k-1-mid-1) && get(nums1,mid)<=get(nums2,k-1-mid)){ // Found Kth Smallest element
            kthsmallest=get(nums1,mid);
            succ=Math.min(get(nums1,mid+1),get(nums2,k-1-mid));
            break;
        }else if(get(nums1,mid)>get(nums2,k-1-mid)){// Kth smallest lies in Left Portion of the Array
            end = mid -1;
        }else{// Kth smallest lies in Right Portion of the Array
            start = mid+1;
        }
    }
    if(start==end+1){// If the Element Search at Nums1 is not sucessful, get the Median from Nums2
        kthsmallest=get(nums2,k-start-1);
        succ=Math.min(get(nums1,start),get(nums2,k-start));
    }
    
    if((m+n)%2==1){ // total number of Elements are Odd
        return kthsmallest;
    }
    
    return (kthsmallest+succ)/2.0;
}