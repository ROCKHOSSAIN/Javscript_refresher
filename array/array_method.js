// const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
// const result = fruits.find((f)=>f=="Orange");
// console.log(result)//particualr element ber kore main array hat dey na


// const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
// const result = fruits.filter((f)=>f==="Lemon" || f==="Mango")
// console.log(result)


// const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
// const result = fruits.slice(3,4);
// console.log(result);



// const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
// const result = fruits.splice(1,3);
// console.log(result);
// console.log(fruits);



// const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
// const result = fruits.map((f)=>{
//     if(f==="Apple"){
//         return "Apple";
        
//     }else{
//         return "N/A";
//     }
// })

// console.log(fruits)
// console.log(result)


// let arr=[];
// const fruits =  ["Banana","Orange","Lemon","Apple","Mango"];
// for(let i=0;i<fruits.length;i++){
//     if(fruits[i]=="Lemon"){
//         arr.push(fruits[i]);
//     }else{
//         arr.push("N/A");

//     }
// }
// console.log(arr);


// const number=[1,2,3,4,5]
// number.reduce((total,currentValue)=>total+currentValue,0)
// console.log(result)

// const numbers=[1,2,3,4,5];
// for(num of numbers){
//     console.log(num);
// }

// const nam="Rocky";
// for(num of nam){
//     console.log(num);
// }

//object

const language ={
    name:"js",
    year:1993,
    creator:"bredthon",
};

for(key in language){
    console.log(language[key]);
}
console.log(language.name);