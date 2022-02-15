'use strict';

async function numbers(){
        return [5,321,9,421,3,4,52,9,9999,32,1,2];
}

numbers().then((numbers)=>{
    let position=0;
    let firstNumber = numbers.shift();
    numbers.forEach((number)=>{
        if(number<firstNumber){
            position+=1;
        }
    });
    return position;
}).then((result)=>console.log(result));