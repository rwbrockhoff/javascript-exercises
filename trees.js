class Tree {
    constructor(){
        this.root = null
    }
    add(value){
        if(this.root===null){
            this.root = new Node(value)
            return
        }

        let current = this.root
        while(true){

            if(current.value > value){
                //go left here
                if(current.left){
                    current = current.left
                }
                else {
                    current.left = new Node(value)
                    return
                }
            }

            else {
                //go right here
                if(current.right){
                    current = current.right
                }
                else {
                    current.right = new Node(value)
                }
            }

        }
    }
}

class Node {
    constructor(value, left=null, right=null){
        this.value = value
        this.left = left
        this.right = right
    }
}