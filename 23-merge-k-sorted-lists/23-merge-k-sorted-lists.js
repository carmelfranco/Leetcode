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
var mergeKLists = function(lists) {
   
    let r1=[],i=0;
    while(i<lists.length){
        let curr=lists[i];
        while(curr){
            console.log(curr.val);
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
};