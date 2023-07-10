class LinkedList {
	constructor() {
		this.head = null;

		// insertNodeAtHead method will insert a LinkedListNode at head
		// of a linked list.
		this.insertNodeAtHead = function (node) {
			if (this.head != null) {
				node.next = this.head;
				this.head = node;
			} else this.head = node;
		};

		// createLinkedList method will create the linked list using the
		// given integer array with the help of InsertAthead method.
		this.createLinkedList = function (list) {
			list.reverse().forEach((element) => {
				let newNode = new LinkedListNode(element);
				this.insertNodeAtHead(newNode);
			});
		};

		// This method will display the elements of the linked list.
		this.display = function () {
			let result = "",
				temp = this.head;
			while (temp != null) {
				result += temp.data;
				temp = temp.next;
				if (temp != null) {
					result += ", ";
				}
			}
			result += "";
			return result;
		};
	}
}

// Template for linked list node class
class LinkedListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

export function getMiddleNode(head) {
	const LL = new LinkedList();
	LL.createLinkedList(head);

	let slow = LL.head;
	let fast = LL.head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

console.log(getMiddleNode([5, 6, 4, 2, 1, 6, 3, 6]));
