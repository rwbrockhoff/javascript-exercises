
function diag(n){
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


function somehow(array){
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

