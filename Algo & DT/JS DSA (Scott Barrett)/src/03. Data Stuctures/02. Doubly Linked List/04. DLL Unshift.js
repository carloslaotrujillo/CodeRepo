class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if(this.length === 0) return undefined
        let temp = this.tail;
        temp.prev = null
        this.tail = this.tail.prev
        this.tail.next = null;
        this.length--
        if(this.length === 0) {
            this.head = null
        }
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
}


let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)