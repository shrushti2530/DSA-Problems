class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null; 
    let current = head; 

    while (current) {
        let next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
    }

    return prev; 
}


function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}


let head = createLinkedList([31, 22, 33, 44, 35]);
console.log("Original List:");
printLinkedList(head);

head = reverseLinkedList(head);
console.log("Reversed List:");
printLinkedList(head);
