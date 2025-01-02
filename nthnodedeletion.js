class ListNode 
{
    constructor(value) 
    {
        this.value = value;
        this.next = null;
    }
}

function deleteNthFromEnd(head, n) 
{
    let dummy = new ListNode(0); 
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    
    for (let i = 0; i <= n; i++)
        {
        if (!fast) return head; 
        fast = fast.next;
    }

    
    while (fast) 
    {
        fast = fast.next;
        slow = slow.next;
    }

   
    slow.next = slow.next.next;

    return dummy.next; 
}


function createLinkedList(arr) 
{
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) 
    {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


function printLinkedList(head) 
{
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

head = deleteNthFromEnd(head, 2); 
console.log("After Deleting 2nd Node from End:");
printLinkedList(head);

