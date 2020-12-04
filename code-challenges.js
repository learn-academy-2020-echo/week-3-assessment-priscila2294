// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const sequence = (number) => {
    let array = [1, 1]
    for (let index = 2; index < number + 1; index++) {
        array.push(array[index-2] + array[index-1])
        
    }


return array

}
// console.log(sequence(9));



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const oddNumbs = (array) => {
    let oddNumbsOnly = array.filter(value => typeof value === "number" && value % 2 !==0)

    return oddNumbsOnly.sort((a,b)=>a-b)
}
// console.log(oddNumbs(fullArr1))

// console.log(oddNumbs(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
// start writing a function
// give your function an arguments named array since you are going to split your string of words into an array of letters.


var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const onlyMiddle = (string) => {
    if(string.length % 2 === 0) {
      var firstIndex =  (string.length/2) - 1
      var secondIndex = Math.floor(string.length / 2)
      return string[firstIndex] + string[secondIndex]
    }
    else {
      return string[Math.floor(string.length/2)]
    }
  }

//   console.log(onlyMiddle(middleLetters1));
//   console.log(onlyMiddle(middleLetters2));




// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)

class SphereArea {
    constructor(radius){
        this.radius = radius
    }
    findArea () {
        return 4 * Math.PI * this.radius ** 2
    }
}  
        // const sphere1 = new SphereArea(3)
        // console.log(sphere1.findArea());
        // const sphere2 = new SphereArea(9)
        // console.log(sphere2.findArea());
        // const sphere3 = new SphereArea(12)
        // console.log(sphere3.findArea())





// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const addNums = (array) => {
    let start = 0
    return array.map(value => {
        return (start += value)

    })

}

// console.log(addNums(numbersToAdd1));
// console.log(addNums(numbersToAdd2));
// console.log(addNums(numbersToAdd3));