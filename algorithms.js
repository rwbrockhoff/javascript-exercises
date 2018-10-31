// Depth-First Tree Traversal

const preOrderTraverse = (node, array) => {
    if(!node) return array

    array.push(node.value)
    array = preOrderTraverse(node.left, array)
    array = preOrderTraverse(node.right, array)
    return array
}

const inOrderTraverse = (node, array) => {
    if(!node) return array

    array = inOrderTraverse(node.left, array)
    array.push(node.value)
    array = inOrderTraverse(node.right, array)
    return array
}

const postOrderTraverse = (node, array) => {
    if(!node) return array

    array = preOrderTraverse(node.left, array)
    array = preOrderTraverse(node.right, array)
    array.push(node.value)
    return array
}

//Breadth-First Tree Traversal

const breadthFirstTraverse = (queue, array) => {

    if(! queue || queue.length) return array

    while(queue.length){
        const node = queue.shift()
        array.push(node.value)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return array
}

const recursiveBFT = (queue, array) => {
    if(!queue.length) return array

    const node = queue.shift()
    array.push(node.value)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)

    return recursiveBFT(queue, array)
}

//Bubble Sort

function bubbleSort(array){
    do {
    var swapped = false
    for(let i = 0; i < array.length; i++){

        // array[0] = 5, array[1] = 2

        if(array[i] > array[i+1]){
            const greater = array[i]      //5
            const lesser = array[i+1]   //2
            array[i] = lesser
            array[i+1] = greater
            swapped=true
        }

    }    
        
    } 
    while(swapped)

    return array
}


var array = [10, 8, 4, 5, 12, 2, 1, 3]

console.log(
    bubbleSort(array)
)



//Merge Sort


var array = [10, 8, 3, 12, 11, 5, 1]

function mergeSort(array){
    if(array.length < 2) return array

    const length = array.length
    const middle = Math.floor(length/2)
    const left = array.slice(0,middle)
    const right = array.slice(middle)
    
    return stitch( mergeSort(left), mergeSort(right) )
    
}

function stitch(left, right){
    const results = []

    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push( left.shift() )
        } 
        else {
            results.push( right.shift() )
        }
    }

    return results.concat(left, right)
}


console.log(
    mergeSort(array)
)