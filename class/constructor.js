// const car1 ={
//     make:"ford",
//     model:"camero",
//     year:2024,

// }

function Car(make,model,year,color){
    this.make = make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive = function(){console.log(`you can drive ${this.model}`);}
}
const car1=new Car("ford","mustang",2024,"red");
const car2=new Car("benz","eraing",2020,"blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car1.drive();
car2.drive();