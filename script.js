let productName = "Headphones";
let price = 2500;
let boolean = true;
let undefinedDataType = undefined;
let nullDataType = null;

console.log(productName);
console.log(price);
console.log(boolean);
console.log(undefinedDataType);
console.log(nullDataType);

console.log("");


console.log(`DataType of Product Name: ${typeof productName}`);
console.log(`DataType of price: ${typeof price}`);
console.log(`DataType of Boolean: ${typeof boolean}`);
console.log(`DataType of Undefined DataType: ${typeof undefinedDataType}`);
console.log(`DataType of Null DataType: ${typeof nullDataType}`);

console.log("");

productName = Number(productName)
price = String(price)


console.log(`String converted to Number: ${Number(productName)}`);
console.log(`DataType after Conversion = ${typeof productName}`);

console.log("");


console.log(`Number converted to String: ${String(price)}`);
console.log(`DataType after Conversion = ${typeof price}`);

console.log("");


productName = Boolean(productName)

console.log(`String converted to Boolean: ${Boolean(productName)}`);
console.log(`DataType after Conversion = ${typeof productName}`);

console.log("");

let nonNumericString = "String Value"
let numeric = 1


console.log(nonNumericString);
nonNumericString = Number(nonNumericString)
console.log(nonNumericString);

console.log("");


console.log(numeric);
numeric = Boolean(numeric)
console.log(numeric);


