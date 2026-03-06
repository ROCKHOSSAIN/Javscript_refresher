// const person = {
//     name : 'john',
//     age : 30
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const a='roll'
// const person = {
//     name: 'John',
//     age: 30
// };
// person[a]=20015;
// console.log(person);




const person = [
    {
        name: 'John',
        address:'dhaka',
        roll:20015
    },
    {
        name: 'mohon',
        address:'khulna',
        roll:20515
    },
    {
        name: 'karina',
        address:'jossore',
        roll:20999
    },


],

console.log(person[2].address);
console.log(person[2].hasOwnProperty("address"));//true/false
console.log(person);