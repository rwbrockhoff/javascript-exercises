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

// destroyer(newArr)

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
    
 //-------------------------//


//Find Longest Word

//INPUT: String with words sepearated by spaces. No underscores or dashes. Will always be string. Please do not count periods as part of a word's length. Example: "Find longest word here."

//OUTPUT: Integer with the length of the longest word, without period character. Example: 32

function findLongestWordLength(str) {
    //Use a regular expression to replace/remove periods. 
    //Split words in string into an array. 
    //Set variable for keeping track of highest word length.

    var stringArray = str.replace(/\./g, '').split(' ')
    var greatestLength = 0

    //Iterate through array, assinging length to variable if greater than previously stored (or 0) value. 

    stringArray.forEach(( e => {
        if(e.length > greatestLength){
            greatestLength = e.length
        }
    }))

    return greatestLength

}
  
    //Test Cases:

  findLongestWordLength("The quick brown fox jumped over the lazy dogwatcher.")
  //Should return 10.

  findLongestWordLength("Worrysome.. Sentence is here to test.")
  //Should return 9. Ignoring consecutive periods. 

 //-------------------------//

 //Replacer Function: Replace 2nd arguement with 3rd arguement in the string (first arguement). If 2nd arguement is capital, make sure to capitalize 3rd arguement, too. 

 //INPUT: String with spaces. NO dashes or underscores (for all three arguements) Example: "The dog was nice", "dog", "cat"

 //OUTPUT: String with correctly replace and capitalized/not-capitalized word passed in as 3rd arguement.
 //Example: "The cat was nice" 

  function myReplace(str, before, after) {
    //Assign first char in before to firstChar
    //create capitalized instance of after variable

    var firstChar = before.charAt(0)
    var capitalAfter = after.charAt(0).toUpperCase() + after.slice(1)
    
    //Return replaced string ternary based on whether or not the firstChar in before variable is capital or not. 
    //If it is capitalized, we need to replace before with the capitalized version of After. 
    //If not, we can just replace before directly with after

    return firstChar === firstChar.toLowerCase() ? 
    str.replace(before, after) : str.replace(before, capitalAfter)

}
  
//Test Cases(provided):

  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")

  //Accounting for a capitalized 2nd arguement, and lowercase 3rd arguement
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  //Should return "He is Sitting on the couch"

 //-------------------------//


  //DNA Sequence

  //Return array of arrays holding the DNA sequence pairs when given half of the pair. So if given "C" return array with ["C", "G"]. 

  //INPUT: String without spaces or extra characters. Might be lowercase. Might be uppercase. Example: "AtG"
  //OUTPUT: Array of arrays holding each pair. Example: [["A", "T"], ["C", "G"]]

  function pairElement(str) {
    //Create array of characters
    //Create empty array to push desired output
    var stringArray = str.split('')
    var finalArray = []

    //Iterate through Array
    //Use Switch/Case to account for 4 character conditions
    
    stringArray.forEach((e => {
        //Convert to uppercase to account for accidental lowercase entries
        switch (e.toUpperCase()){
            case 'C' :
            finalArray.push(["C", "G"])
            break;

            case 'G' : 
            finalArray.push(["G", "C"])
            break;

            case 'A' : 
            finalArray.push(["A", "T"])
            break;

            case 'T' :
            finalArray.push(["T", "A"])
            break;
            
            //Default case for invalid characters
            default :
            console.log('Invalid entry given. Try again with any 4 characters: A, T, C, G')
        }

    }))

    return finalArray
  }

   //-------------------------//

   //Find the missing letter
   //Given a string, find the missing letter from the alphabet

   //INPUT: String without spaces or special characters. Already arranged in alphabetical order. 
   //OUTPUT: Missing letter, or if no missing letter, undefined

   function fearNotLetter(str) {
    //Create array from string arguement
    //Create array for alphabet

    var stringArray = str.toLowerCase().split('')
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    
    //find and return index in alphabet where the stringArray starts
    
    var startIndex = alphabet.findIndex(((e => {
        return e === str.toLowerCase().charAt(0)
    })))

    //iterate through the stringArray comparing its value at given index compared to alphabet at the startIndex
    //increment startIndex per iteration (if more than one)
    for(let i=0; i < stringArray.length; i++){
        if(stringArray[i] !== alphabet[startIndex]){
            return alphabet[startIndex]
        }
        startIndex++
    }
  }
  
  //Test Cases: 

  fearNotLetter("abce")
  //Should return 'd'

  fearNotLetter("stvwx")
  //Should return 'u'

  fearNotLetter("fghij")
  //Should return undefined since no condition is met and nothing is returned

  //-------------------------//

  //uniteUnique function
  //given an unknown number of arguments combine them into an array in the same order as provided [arg1, arg2, arg3] without any duplicates. 

  //INPUT: Unknown number of argumnets, but all arguments will be arrays of integers. No string values. No special cases to account for. 
  //OUTPUT: Single array with all unique integer values in order of arguments passed into the function.

  function uniteUnique(arr) {
      //Determine number of arguments
      //create two empty Arrays, one to add all argument integer values, and one to push unique values to return.
    var args = arguments.length
    var concatArray = []
    var finalArray = []
    //iterate through arguments and concat them together
    for(let i =0; i < args; i++){
        concatArray = concatArray.concat(arguments[i])
    }
    //map over values and push unique values into finalArray
    concatArray.map((e => {
        finalArray.indexOf(e) > -1 ? '' : finalArray.push(e)
    }))

    return finalArray
  }

  //Test Cases(provied):

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
  //Should return: [1, 3, 2, 5, 4]

  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
  //Should return:  [1, 2, 3, 5, 4, 6, 7, 8]

//-------------------------//

  //Sum Fibonacci Sequence 

  function sumFibs(num) {
    //Fibonacci sequence: Next value is sum of previous two integers

    //INPUT: Given a positive integer. No strings or other values. 
    //OUTPUT: Sum of all odd values in a Fibonacci sequence up to (and including) the
    //argument integer and return that single integer.

    var currentValue = 1
    var finalArray = [1, 1]

    //Starting with a [1,1] base because any given positive integer will at least be 1. 
    //Less code to hard code a starting point that all values will meet the condition. 
    //You could account for this with logic instead of hard coding a start value, though.

    while(currentValue <= num){
        //Iterate through while our latest Fibonacci number is <= given argument
        //assign currentValue based on new array length. 
        
        currentValue = finalArray[finalArray.length-1] + finalArray[finalArray.length-2]
        if(currentValue <= num){
            //If it is the same value or less than argument, we want to add to array.
            finalArray.push(currentValue)
        }
        else {
            //If not, we have an array with all the conditional values required.
            //Instead of assigning to a variable, we can just return out the value here.

            //Return will end the function returning a single sum integer
           //Filter out even values
           //Curry a reduce method to add all the odd values together
           return finalArray
           .filter(e => {
               return e%2!==0
            })
            .reduce((a,b) => {
                return a+b
            }) 
        }
    }
    
  }

  //Test Cases (provided):
  sumFibs(1)
   //Should return a number

  sumFibs(4)
  //Should return 5

  sumFibs(75024)
  //Should return 60696

  sumFibs(75025)
  //Should return 135721

//-------------------------//

  //Sum Primes Function

  //Prime is a number only divisible by 1 & itself: 2, 3, 5, 7

  //INPUT: A max value, positive integer. Example: 10
  //OUTPUT: A sum of all prime numbers up to (and including) the max value (argument). Example: 28


  function sumPrimes(num) {
    //2 is first prime number. First number given will at least include this prime number. Condition can be written to account for INPUT: 1 if need be. 
    var currentValue = 2
    var primeArray = []
    var notPrimeArray = []

    //Iterate through every number from 2 to max value (num)
    while(currentValue <= num){
        //We do not care if it can divide by 1, or itself. So we write our for loop starting at 2 and ending 1 less than the currentValue. Otherwise we are performing extra iterations for no reason.

        for(let i = 2; i < currentValue; i++){
            if(currentValue%i===0){
        //If at any point the remainder is zero, push into notPrimeArray
                notPrimeArray.push(currentValue)
            }
        }

        //Outside of for loop, if the notPrimeArray is empty, we know that the currentValue is prime. So we push it into our prime array.
        if(notPrimeArray.length === 0){
            primeArray.push(currentValue)
        }

        //Increase current value and reset notPrimeArray to empty for next iteration.
        currentValue++    
        notPrimeArray.length=0
    }
        //Simple reduce function to get our sum from the final array
    return primeArray.reduce((a,b) => {
        return a+b
    })
  }

//-------------------------//

//Palindrome Checker

//INPUT: Given a string which could have lower/uppercase letters or special characters: (), whitespace, comma, period or '-'. Example: "Rac_ecar"
//OUTPUT: True or false boolean value. 

function palindrome(str) {
    //Removing ( with .replace() ) all accounted special characters with regular expression before making string all lowercase and assigning to variable.
    var filterString = str.replace(/[\()\s_,.-]/g, "").toLowerCase()

    //Compare string to itself split into an array, reversed and joined back together to verify if palindrome. Returns boolean based on comparison.
    
    return filterString === filterString.split("").reverse().join("") ? true : false
   }
   
   console.log(
     palindrome("0_0 (: /-\ :) 0-0")
   )




   function binarySearch(array, item){
    //Sort faster than linear time complexity. Achieve n logn time complexity by reducing our search by log2 each iteration. 

    //Set max to the array length (accounting for 0 index)
    //Set min for the first item in the array

    var max = array.length -1
    var min = 0
    var guess

    while(min <= max){
        //Guess is reassigned a value every iteration, which is why we need it inside our while loop

        //Guess is the amount of items in the array divided by two. We're splitting like we do in a binary search to reduce our time complexity. 

        //Every iteration, if not found, we move our guess to reflect the side of the array that will hold the value. This function assumes that our input array is already sorted. 

        guess = Math.floor( ( max + min ) / 2)

        if(array[guess]===item){
            //If we found it, return it. We always check for this first.
            return guess
        }
        else {
                //is our Guess less than the item?
                //10 < 15 = true
            if(array[guess] < item){
                //if so, our new minimum boundary can be our guess + 1 (because our guess didn't hit as === in our first if condition). Now we are sorting from that new boundary (11) and up to the max (unchanged).
                min = guess + 1
            }

                //is our Guess greater than the item?
                // 5 > 2 = true
            else {
                //if so, our new max boundary can be our guess -1. Same reasoning as above for the + 1. Now we are sorting from our min (unchanged) to our maximum (4)
                max = guess -1
            }
        }
       
    }
    //If no condition is met, number is not found in the array. 
    return "Not Found"
}



//-------------------------//
  module.exports = {
      destroyer,
      sortOut,
      diffArray,
      sumAll,
      spinalCase,
      findLongestWordLength,
      myReplace,
      pairElement,
      fearNotLetter,
      uniteUnique, 
      sumFibs

  }
  //-------------------------//