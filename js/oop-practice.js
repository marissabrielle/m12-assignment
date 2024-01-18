// STEP 1
// function Cat() { }
// const Dog = function () { }

// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()

// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created')
//     }
// }

// new Animal()

// STEP 4
// function Animal(message) {
//     this.message = message
//     console.log(message)
// }

// const animal = new Animal('The Animal has been created')

// STEP 5
// function Animal(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
// }

// const cat = new Animal('cat', 'tabby', 'brown', '10 inches', '18 inches')

// STEP 6
// for (let property in cat) {
//     console.log(`${property}: ${cat[property]}`)
// }

// STEP 7
// function Animal(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.height = height
//     this.color = color
//     this.length = length

//     this.speak = function () {
//         if (this.type === 'dog') {
//             return `The ${this.color} dog is barking!`
//         } else if (this.type === 'cat') {
//             return `The ${this.color} cat is meowing!`
//         }
//     }
// }
// const dog = new Animal('dog', 'corgi', 'orange', '20 inches', '30 inches')
// const cat = new Animal('cat', 'tabby', 'brown', '10 inches', '18 inches')

// console.log(cat.speak())
// console.log(dog.speak())


// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length

//     let checkType = function () {
//         if (_type === 'dog') {
//             return 'dog'
//         }
//         else {
//             return 'cat'
//         }
//     }

//     this.speak = function () {
//         console.log(`The ${_type} has made a noise!`)
//     }
// }

// const animal = new Animal('cat')
// animal.speak()


// STEP 9
// String.prototype.findWords = function (input, word) {
//     alert(`'${word}' was found ${Array.from(input.matchAll(word)).length} times`)
// }

// const text = 'The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they hadnt thought to check the weather north of the canyon. Huge thunderstorms had brought a deluge o rain and produced flash floods heading their way. The two hikers had no idea what was coming.'

// let searchWord = prompt("Enter a word to see how many times it appears in the text: The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they hadn't thought to check the weather north of the canyon. Huge thunderstorms had brought a deluge o rain and produced flash floods heading their way. The two hikers had no idea what was coming.")

// String.prototype.findWords(text, searchWord)