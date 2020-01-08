 function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let s = "";
    while(head!=null){
        s += head.val;
        head = head.next;
    }
    return parseInt(s,2);
};

let head = new ListNode(1);
head.next = new ListNode(0);
let temp = head.next;
temp.next = new ListNode(1);
console.log(getDecimalValue(head));