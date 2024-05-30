// use const where veriable values do not change
const a=2;
// a=3; error Cannot assign to 'a' because it is a constant.

// you can use let if you want to change values 
// let a:number=4;Cannot redeclare block-scoped variable 'a'.
// use element 
if(true){
    let z=4;
}
else{
    z="shaheer";
}
console.log("let"+z);//error Cannot find name 'z'.
