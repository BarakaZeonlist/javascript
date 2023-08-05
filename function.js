// let myArray =[1,2,3,4,5,6,7,8,9]


// let include=myArray.includes(5)

// console.log(include)

//TODO: INCREMENT AND DECREMENT 

//greater than 
// let x = 11

// if (x>=10){
//     console.log("X is greater or equal to 10")
// }else {
    //     console.log("X is less than  10")
    
    // }
    

    // x>=10 ?     console.log("X is greater or equal to 10") :console.log("X is less than  10")
//TODO: REFERRENTIAL EQUALITY
//comparing by value 
const b = 21
const c = 21
const d = 33


// console.log(b===c)

//it even work with string and boolean value 
//let dive to the code 


//Cannot redeclare block-scoped variable 'x'.ts(2451)
// WHEN YOU HAVE TWO VARIABLE NAME WITH THE SAME NAME 
const x = "hello world"
const y = "hello world"
const z = "hello world"
// console.log(x===y)

//comparison by reference 
//COMPARING OBJECT YOU WIL GET FALSE SINCE THEYARE STORED IN DIFFERENT MEMORY LOCATION 
//WHY ?
//WHAT ARE THE ADVANTAGE OF DOING THIS 
// console.log({animal:"dog"}==={animal:"dog"})

// let obj1 = {animal: "dog"}
// let obj2 = {animal: "dog"}
// let obj3= obj1

// console.log(obj1===obj2)
// console.log(obj3===obj2)
// console.log(obj1===obj3)
//object one and three return true since they are located in the same memory location

// console.log("W"==="w")

// let student;

// console.log(student)


const mwanafunzi ={
    name: "juma",
    maksi:{
        kisahili: 40,
        hesabu: 70
    }

}
// destructuring 
let {name, maksi}= mwanafunzi
console.log(name)