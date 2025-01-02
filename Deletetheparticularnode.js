class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function deleteNode(head, valueToDelete) {
    if (!head) return null; // If the list is empty, return null

    // If the node to delete is the head
    if (head.value === valueToDelete) {
        return head.next; // Return the next node as the new head
    }

    let current = head;

    // Traverse the list to find the node before the one to delete
    while (current.next && current.next.value !== valueToDelete) {
        current = current.next;
    }

    // If the node was found, skip it in the list
    if (current.next) {
        current.next = current.next.next;
    }

    return head; 
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


let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original List:");
printLinkedList(head);

head = deleteNode(head, 3); 
console.log("After Deleting 3:");
printLinkedList(head);
