//AARRAY ASSIGNMENT 1 (BUILDING YOUR FRIEND LIST)
//QUESTION NUMBER 1
//Define an object named people conttaining an empty array called friends.
type friends={
    FirstName:string,
    lastName:string,
    id:number
};
let people: {friends:friends[]}={
    friends:[]
};
//QUESTION NUMBER 2
//Create three seperate object each representing a friend,with properties like firstName,lastName,and optionally id.
let firstfriend ={
    FirstName:"Hania",
    lastName:"Asim",
    id:1
};
let secondfriend ={
    FirstName:"Ayman",
    lastName:"Khan",
    id:2
};
let thirdfriend ={
    FirstName:"Arwa",
    lastName:"Zubair",
    id:3

};
//QUESTION 3
//Add these three friend objects to the friends array within the people object.
people.friends.push(firstfriend,secondfriend,thirdfriend);
//QUESTION NUMBER 4
// Output the entire people object to the console,displaying your information and your friendlist.
console.log(people);