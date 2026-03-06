import { Parent } from "../parentClass.js";
// const Parent = require("./parentClass")//arekta way

const parentObj=new Parent();
class Child {
    calculation(type,numOne,numTwo){
        let result;
        if(type==="sum"){
            result =  parentObj.sum(numOne,numTwo)
        }else{
            result =  parentObj.sub(numOne,numTwo)

        }
        return result;
    }
}

const childObj=new Child();
console.log(childObj.calculation("sum",12,10));
console.log(childObj.calculation("sub",12,10));
// childObj.calculation("sub",12,10);