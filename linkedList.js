class LinkedList {
    constructor(value){
        this.head = {value, next: null}
        this.tail = this.head
    }

    insert(value){
        const node = {value, next: null}
        this.tail.next = node
        this.tail = node
    }

    remove(){
        let currentNode = this.head

        while(currentNode.next !== this.tail){
            currentNode = currentNode.next
        }

        currentNode.next = null
        this.tail = currentNode

    }

    isHead(value){
        return this.head === value
    }

    isTail(value){
        return this.tail === value
    }
    
}