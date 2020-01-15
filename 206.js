/**
 * Definition for singly-linked list.
  */
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    while(head!=null){
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
        
    }
    return prev;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let reverse = reverseList(head);
let ans = [];
while(reverse!=null){
    ans.push(reverse.val);
    reverse = reverse.next;
}

console.log(ans);