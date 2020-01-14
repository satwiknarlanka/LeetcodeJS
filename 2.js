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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new ListNode(0);
    let node = head;
    while(l1!=null && l2!=null){
        let val = l1.val+l2.val+carry;
        carry = 0;
        if(val>9){
            carry = 1;
            val -= 10;
        }
        node.next = new ListNode(val);
        node = node.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if(l1==null){
        while(l2!=null){
            let val = l2.val + carry;
            carry = 0;
            if(val>9){
                carry = 1;
                val = 0
            }
            node.next = new ListNode(val)
            node = node.next;
            l2 = l2.next;
        }
    }
    if(l2 == null){
        while(l1!=null){
            let val = l1.val + carry;
            carry = 0;
            if(val>9){
                carry = 1;
                val = 0
            }
            node.next = new ListNode(val)
            node = node.next;
            l1 = l1.next;
        }
    }
    if(carry == 1){
        node.next = new ListNode(1);
    }
return head.next;

};

let l1 = new ListNode(5);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2));