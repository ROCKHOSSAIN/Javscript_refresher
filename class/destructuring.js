// const user={
//     id:339,
//     name:"sumit",
//     age:42,
//     education:{
//         degree:"BSC",
//     }
// }
// console.log(user.education["degree"]);
// const {name,age} = user;
// const{education:{degree}}=user;
// console.log(name,age);


const student = {
    id: 101,
    info: {
        personal: {
            city: "Dhaka",
            zip: 1200
        }
    }
};
const {info:{personal:{city}}={}}=student;//{} eta dewar main karon person e kisu na thakleo undefined dekhaibo
console.log(student.info.personal["city"]);
console.log(student["info"]["personal"]["zip"]);
console.log(city);