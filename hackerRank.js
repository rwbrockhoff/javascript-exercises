
function diagonal(n){
    let ans = []
    for(let i = 0; i < n; i++){
        
        let det = n-1
        if(!ans[i]) ans[i] = []
        for(let j = 0; j < n; j++){
            
            if( j >= (det-i) ) ans[i].push('#')
            else ans[i].push(" ")
        }
    }
   return ans.forEach(e => {
       console.log(e.join(""))
   })
}


//==Quick test practices==//
var matrix = [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, -6, 7],
    [1, 2, 3, 4, 5, 6, 7]
]

 var negMag = [
[-1, -1, 0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5]
]
var megga = [
[-1, 1, -1, 0, 0, 0],
[0, -1, 0, 0, 0, 0],
[-1, -1, -1, 0, 0, 0],
[0, -9, 2, -4, -4, 0],
[-7, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0]
]


function hourglass(array){
    var arr = array.slice()
    var len = arr.length/2
   
    var greatestSum = {value: 0, iterated: false}

    for(let i = 0; i <= len; i++){
        //first layer
        
        for(let j = 0; j <= len; j++){
            //second layer
            let innerSum = 0
            innerSum += arr[i][j] + arr[i][j+1] + arr[i][j+2]
            innerSum += arr[i+1][j+1]
            innerSum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            
            if(greatestSum.value===0 && !greatestSum.iterated) greatestSum = {value: innerSum, iterated: true}
            if(innerSum >= greatestSum.value) greatestSum.value = innerSum
        }
    }

    return greatestSum.value
}




function dynamicArray(n, queries) {
    var seqList = new Array(n)
    var lastAnswer = 0
    var N = n
    for(let i = 0; i < seqList.length; i++){
        seqList[i] = []
    }

    return queries.map(e => {
        let index = (e[1] ^ lastAnswer) % N

        if(e[0]===1){
           seqList[index].push(e[2])
        }

        else if(e[0]===2){  
           
            let innerArr = seqList[index]
            let innerIndex = e[2] % innerArr.length

            lastAnswer = innerArr[innerIndex]
            return lastAnswer
        }

        
    }).filter(e => {
        return e
    })
}



//Given a line of 1 index based "people", each person can bribe the person in front of them to move 2 positions. Check to see how many bribes have been made or "people" who have changed positions. If a person moves more than 2 times, return the string "too chaotic".


function movieLine(q){
    
    var swapped = true
    var count = {}
    var total = 0

    while(swapped){
        swapped = false

        for(let i = 0; i < q.length; i++){
            
            if(q[i] > q[i+1]){
                let greater = q[i]
                q[i] = q[i+1]
                q[i+1] = greater

                swapped = true
                if( count[q[i+1]] ) count[q[i+1]] += 1
                else {
                    count[q[i+1]] = 1
                }

                if(count[q[i+1]] > 2) return "Too chaotic"
            }

        }

    }
    for(var key in count){
        total += count[key]
    }
    
    return total
    
}



function stringCompare(a, b){
    var shortArr;
    var longArr;
    var sharedCount = 0

    if(a.length >= b.length){
        //a is greater
        longArr = a.split('')
        shortArr = b.split('')
    }
    else {
        longArr = b.split('')
        shortArr = a.split('')
    }

    for(let i = 0; i < longArr.length; i++){

            if( shortArr.indexOf(longArr[i]) >= 0 ){
                let index = shortArr.indexOf(longArr[i])
                shortArr.splice(index, 1)

                sharedCount++
                
            }

    }
    
        return (a.length - sharedCount) + (b.length - sharedCount)

}


//Letters in a given string must all appear the same number of times. If one letter can be deleted to maintain equal count--it is acceptable. But it cannot require more than 1 letter deletion from string. Return YES if valid, NO if invalid. 

function alterLetter(s){
    var strArray = s.split('')
    var sObj = {}
    
    for(let i = 0; i < s.length; i++){
        
        if(!sObj[ strArray[i] ] ) sObj[ strArray[i] ] = 1
        else sObj[ strArray[i] ] += 1
    }

    var count = 0
    var value = 0

    for(var key in sObj){
       
        if(!value){
            value = sObj[key]
        }

        if(value !== sObj[key]){
            count++
            if(count > 1) return 'NO'
        }
    }
    
    return 'YES'

}