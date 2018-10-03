// A variety of javascript exercises to practice and demonstrate javascript knowledge. These problems came from whiteboard problems, freeCodeCamp, or other online resources.



// Destroyer Function

function destroyer(arr) {
    // Remove all the values
    //how many arguments do we have?
    //iterate through arguments
    //check against arr
    
    
    for (let i = 1; i < arguments.length; i++){
        while(arr.indexOf(arguments[i]) !==-1){
            let index = arr.indexOf(arguments[i])
            arr.splice(index, 1)
        }
    }  
    return arr;
  }

destroyer(newArr)

//-------------------------//


// Using the call method 

//this refers to what is left of the dot
//nameObj has key "name" 

var nameObj = {
    name: 'hello'
}

var callName = function(){
    // [nameObj].name 
    console.log(this.name)
}

callName.call(nameObj)

//-------------------------//

//Highest & Lowest Value (sorted)

// INPUT:
//single array with integer values
//no decimal places, assume positive value
// [1, 5, 42, 17, 12, 59]

// DESIRED OUTPUT:
// array containing highest and then lowest value
// [HighestInteger, LowestInteger]

var array = [1, 30, 10, 7, 243, 4]

function sortOut(arr){
    arr.sort((a,b) => {
        // first iteration: a = 1, b=30
        // a-b sorts in ascending order
        return a-b
    })
    // return highest: end of the array, 
    // lowest: first item in array

    return [arr[arr.length-1], arr[0]]
}

sortOut(array)
// Results in [243, 1]


//-------------------------//

// Searching for Differences in Arrays

//INPUT: two arrays with positive, non-decimal integers
//DESIRED OUTPUT: array with numbers in first array NOT found in 
//second array

function diffArray(arr1, arr2) {
    var newArr = []
    //iterate through one array 
    //looking for value in 2nd array
    //if -1 because it's not found, add to newArr

    arr1.forEach(e => {
        if (arr2.indexOf(e) === -1){
            console.log(e)
            newArr.push(e)
        }
    })
    return newArr
}

diffArray([1, 2, 3, 4, 5], [1, 3, 5])
//Resolves to [2, 4]


//-------------------------//

// Sum all numbers between two integers

//INPUT: Array with two positive, non-decimal integers [1, 5]
// DESIRED OUTPUT: sum integer of all combined integers between two integers

function sumAll(arr) {
    //argument is array with two numbers
    //iterate from one to the other
    //adding values to final num

    var sum = 0
    let highest = arr[0] > arr[1] ? arr[0] : arr[1]
    let lowest = arr[1] < arr[0] ? arr[1] : arr[0]

    // determine where to start (lowest)
    // and determine where to end (highest)
    
        for(let i = lowest; i <= highest; i++){
            // iterate from lowest to highest adding that value 
            // to our final sum
            sum+=i 
        }
    
        return sum
    }
    
    sumAll([5,60])

    //-------------------------//

    //Change text input to be spinal case. 

    //INPUT: String only. Could contain spaces, underscores, and a variety of upper/lowercase letters. 
    //OUTPUT:  Expect a string returned in spinal case. No spaces or underscores: (this-is-a-test)

    function spinalCase(str) {

        return str
        .replace(/([a-z])([A-Z])/g, `$1 $2`)
        //Looking for spaces (\s) and underscores (|_) to replace with a dash. 
        .replace(/([\s+|_])/g, `-`)
        .toLowerCase()
      }
    
      //Test Cases:
      spinalCase("This Is Spinal Tap")
      spinalCase("thisIsSpinalTap")
      spinalCase("The_Andy_Griffith_Show")


      
      //PigLatin Function

      function translatePigLatin(str) {
        var stringArr = str.split('')
        for(let i = 0; i < stringArr.length; i++){
          
            
        }
    
        return str
       
      }
      