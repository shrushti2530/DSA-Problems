class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindromeLinkedList(head) {
    let values = [];
    let current = head;

    while (current) {
        values.push(current.value);
        current = current.next;
    }

  
    let right = values.length - 1;

    while (left < right) {
        if (values[left] !== values[right]) return false;
        left++;
        right--;
    }

    return true;
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


let head = createLinkedList([1, 2, 3, 2, 1]);
console.log(isPalindromeLinkedList(head)); 

head = createLinkedList([1, 2, 3, 4]);
console.log(isPalindromeLinkedList(head)); // false
