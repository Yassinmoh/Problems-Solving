const isEqualTo100 =(num1,num2)=>{
    let sum=num1+num2;
    if(num1===100 || num2===100){
        return true;
    }else if(sum===100){
        return true
    }else{
        return false;
    }
}
console.log(isEqualTo100(50,90)); //false
console.log(isEqualTo100(40,60)); //true
console.log(isEqualTo100(100,90)); //true