/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Time Complexity O(n*k), space complexity O(n)
/*var mergeKLists = function(lists) {
   
    let r1=[],i=0;
    while(i<lists.length){
        let curr=lists[i];
        while(curr){           
            r1.push(curr.val);
            curr=curr.next;
        }
        i++;
    }
    
    r1.sort((a,b)=>(a-b));
    
    let head=new ListNode(0);
    curr=head;
    for(let i=0;i<r1.length;i++){
        curr.next=new ListNode(r1[i]);
        curr=curr.next;
    }
    return head.next;
};*/

// Time Complexity O(n log k), space complexity O(1)
var mergeKLists = function(lists) {
        if(lists===null || lists.length==0){
            return null;
        }
        while(lists.length>1){
            let result=[];
            for(let i=0;i<lists.length;i+=2){
                let l1=lists[i];
                let l2=null;
                if(i+1<lists.length){
                    l2=lists[i+1];
                }
                result.push(merge2Lists(l1,l2));
            }
            lists=result;
            
        }
        return lists[0];
}

var merge2Lists=function(l1,l2){
    let dummy= new ListNode(0);
    let curr=dummy;
    while(l1 && l2){
        if(l1.val<l2.val){
            curr.next=l1;
            l1=l1.next;
        }else{
            curr.next=l2;
            l2=l2.next;
        }
        curr=curr.next;
    }
    if(l1){
        curr.next=l1;
    }
    if(l2){
        curr.next=l2;
    }
    
    return dummy.next;
}