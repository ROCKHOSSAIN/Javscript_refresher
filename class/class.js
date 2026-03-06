class Product{
    constructor(name,model,year,color,price){
    this.name = name,
    this.model=model,
    this.year=year,
    this.color=color,
    this.price=price,
    this.drive = function(){console.log(`you can drive ${this.model}`);}
    }

    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price+(this.price*salesTax);
    }


}
const salesTax=0.05;
const product1=new Product("ford","mustang",2024,"red",19.99);
const product2=new Product("benz","eraing",2020,"blue",39.99);
// console.log(product1);

// product1.displayProduct();
product1.drive();
const total = product1.calculateTotal(salesTax);
// const total = product2.calculateTotal(salesTax);

console.log(`total price with tax:$${total.toFixed(2)}`);