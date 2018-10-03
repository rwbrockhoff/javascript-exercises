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

    var stringArray = str.split('')
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    
    //find and return index in alphabet where the stringArray starts
    
    var startIndex = alphabet.findIndex(((e => {
        return e === str.charAt(0)
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

  