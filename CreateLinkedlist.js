class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Start with an empty list
    }

   
    addNode(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode; // If the list is empty, make the new node the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Link the new node at the end
        }
    }


    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}


const list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);

console.log("Linked List:");
list.printList(); // Output: 10 -> 20 -> 30
