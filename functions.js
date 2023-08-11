
// operator = alert("enter an operator");

function sum(){
    const num1 = 43;
    const num2 = 76;
    const operator = '+';
    
    const sum = num1+num2;
    console.log(sum);
} 

function difference(){
    const num1 = 54;
    const num2 = 654;
    
    const difference = num1 - num2;
    console.log(difference); 
  
    
}

function divide(){
    const num1 = 54;
    const num2 = 53;

    const division = num1/num2;
    console.log(division);
}

const product = (()=>{
    const num1 = 23;
    const num2 = 54;

    const product = num1 * num2;
    console.log(`the product is: ${product}`);
})

sum();
divide();
product();
difference();

module.exports = {
    product, sum
}