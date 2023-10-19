class LinkedListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

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

function removeNthLastNode(head, n) {
	const SLL = new LinkedList();
	SLL.createLinkedList(head);

	let removedNode;
	if (n >= head.length) {
		removedNode = SLL.head;
		SLL.head = SLL.head.next;
		return removedNode.data;
	}

	let sllHead = SLL.head;
	let sllTail = SLL.head;

	let i = 0;
	while (i < n) {
		sllTail = sllTail.next;
		i++;
	}

	while (sllTail.next !== null) {
		sllHead = sllHead.next;
		sllTail = sllTail.next;
	}

	removedNode = sllHead.next;
	sllHead.next = sllHead.next.next;

	return removedNode.data;
}

console.log(removeNthLastNode([34, 53, 6, 95, 38, 28, 17, 63, 16, 76], 6));
