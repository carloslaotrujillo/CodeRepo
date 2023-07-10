class LinkedListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

// Template for the linked list
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
		// returns the number of nodes in the linked list
		this.getLength = function (head) {
			let length = 0,
				temp = head;
			while (temp != null) {
				length++;
				temp = temp.next;
			}
			return length;
		};
		// returns the node at the specified position(index) of the linked list
		this.getNode = function (head, pos) {
			if (pos !== -1) {
				let p = 0;
				let ptr = head;
				while (p < pos) {
					ptr = ptr.next;
					p += 1;
				}
				return ptr;
			}
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

export function detectCycle(head) {
	if (!head) {
		return false;
	}

	const LL = new LinkedList();
	LL.createLinkedList(head);

	let slow = LL.head;
	let fast = LL.head;

	while (fast && fast.next) {
		slow = slow.next;

		fast = fast.next.next;

		if (slow === fast) {
			return true;
		}
	}

	return false;
}
