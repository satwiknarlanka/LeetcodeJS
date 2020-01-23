/**
 * Definition for singly-linked list.
 */
  
function ListNode(val) {
    this.val = val;
    this.next = null;
  }

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let node = headA;
    let countA=0,countB=0;
    while(node!=null){
        countA++;
        node = node.next;
    }
    node = headB;
    while(node!=null){
        countB++;
        node = node.next;
    }

    let nodeA = headA;
    let nodeB = headB;
    if(countA>countB){
        for(let i=0;i<countA-countB;i++){
            nodeA = nodeA.next;
        }
    }
    else{
        for(let i=0;i<countB-countA;i++){
            nodeB = nodeB.next;
        }
    }
    while(nodeA!=null){
        if(nodeA == nodeB){
            return nodeA;
        }
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    return null;
};


function ArrayToList(arr){
    let head = new ListNode(0);
    let node = head;
    for(x of arr){
        node.next = new ListNode(x);
        node = node.next;
    }
    return head.next;
}


let ListA = ArrayToList([4,1]);
ListA.next.next = ArrayToList([8,4,5]);
let ListB = ArrayToList([5,0,1]);
ListB.next.next.next = ListA.next.next;

console.log(getIntersectionNode(ListA,ListB));
console.log(getIntersectionNode([2,6,4],[1,5]));


// Amazing solution
// let pA = headA, pB = headB;
//     while (pA != pB) {
//         pA = pA == null ? headB : pA.next;
//         pB = pB == null ? headA : pB.next;
//     }
//     return pA;