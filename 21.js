/**
 * Definition for singly-linked list.
 */
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const out = new ListNode();
    let head = out;
    
    while(l1!=null && l2!=null){
        if(l1.val<l2.val){
            head.next= new ListNode(l1.val);
            head=head.next;
            l1=l1.next;
        }
        else{
            head.next = new ListNode(l2.val);
            head=head.next;
            l2=l2.next;
        }
    }
    if(l1==null){
        head.next=l2;
    }
    else{
        head.next=l1;
    }
    return out.next;

    
};
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let res = mergeTwoLists(l1,l2);
while(res!=null){
    process.stdout.write(res.val+" ");
    res = res.next;
}

