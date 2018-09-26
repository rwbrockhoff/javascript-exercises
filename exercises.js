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

  var newArr = [1, 4, 5]

destroyer(newArr)

// End of Function