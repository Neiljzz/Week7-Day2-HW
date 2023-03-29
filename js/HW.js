/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
console.log('This is the homework!');

function toCelcius(temp){
    return (temp-32)/1.8
}

let r1 = toCelcius(43)
console.log(r1)
console.log(toCelcius(32))









/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/



// let user1 = new User('brians', 'abc123');
// user1.changePassword('abc123', '123abc'); // Sets the user's password to 123abc

class User{
    constructor(username, password){
        this.username = username;
        this.password= password;
    }
    changePassword(old_password, new_password){
        if (this.password == old_password){
            this.password = new_password
        }
    }
}



let user1 = new User('brians', 'abc123');
user1.changePassword('abc123', '123abc'); // Sets the user's password to 123abc

console.log(user1.password)






/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/ 

// function squareNegatives(nums){
//     let result = []
//     for (let num of nums ){
//         if(num < 0){
//             result.push(num * num) 
//         }
//     } 
//     return(result)
// }

// let r2 = squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
// console.log(r2)
// squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
// squareNegatives([2, 4, 6, 8, 10]) // []

function squareNegatives(nums){
    let filter_nums = nums.filter(num => num < 0)
    return filter_nums.map(num => num * num)
}

let r3 = squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])
console.log(r3)
