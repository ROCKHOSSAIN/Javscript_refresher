// const hello = function(){
//     console.log("hello")
// }
// console.log(hello())


// const hello=()=>{
//     console.log("hello");
// }
// console.log(hello());

// const hello=()=> console.log(5+6);

// hello();



// const hello=()=>{
//     return{//means object return
//         a:5,
//         b:6,
//     };
// };
// console.log(hello());
// or 
// const hello=()=>({
//         a:5,
//         b:6,
// });
// console.log(hello());

//anonymous function

function hello(){//anonymous function
 return function(){
        return console.log("hello");
        
    }
}
