var people = {
    friends: []
};
//QUESTION NUMBER 2
//Create three seperate object each representing a friend,with properties like firstName,lastName,and optionally id.
var firstfriend = {
    FirstName: "Hania",
    lastName: "Asim",
    id: 1
};
var secondfriend = {
    FirstName: "Ayman",
    lastName: "Khan",
    id: 2
};
var thirdfriend = {
    FirstName: "Arwa",
    lastName: "Zubair",
    id: 3
};
//QUESTION 3
//Add these three friend objects to the friends array within the people object.
people.friends.push(firstfriend, secondfriend, thirdfriend);
//QUESTION NUMBER 4
// Output the entire people object to the console,displaying your information and your friendlist.
console.log(people);
