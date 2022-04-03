class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        this.count = 1
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
         const newNode = new Node(value)
         if (this.root === null) {
             this.root = newNode
             return this
         }
         let temp = this.root
         while(true) {
             if (newNode.value === temp.value) {
                 temp.count++
                 return this
             }
             if (newNode.value < temp.value) {
                 if (temp.left === null) {
                     temp.left = newNode
                     return this
                 }
                 temp = temp.left
             } else {
                 if (temp.right === null) {
                     temp.right = newNode
                     return this
                 }
                 temp = temp.right
             }
         }
     }

     contains(value) {
         if(this.root === null) return false
         let temp = this.root
         while(temp) {
             if(value === temp.value) return true
             if(value < temp.value) {
                 temp = temp.left
             } else {
                 temp = temp.right
             }
         }
         return false
     }

     minValueNode(currentNode) {
         while(currentNode.left != null) {
             currentNode = currentNode.left
         }
         return currentNode
     }
}




let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(52)
myTree.insert(82)
myTree.insert(21)
myTree.insert(21)

myTree.contains(47)
myTree.contains(17)
myTree.contains(18)
myTree.contains(22)

myTree.minValueNode(myTree.root)