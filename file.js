const fs = require('fs');

async function leer(){
    return new Promise((resolve,reject)=>{
        fs.readFile(__dirname+'/archivo.txt',{encoding:'utf-8'},(err,data)=>{
            resolve(data);
            if(err){
                reject(err);
            }
        });
    });
}


async function main(){
    let data = await leer();
    console.log(data);
}
leer().then((data)=>console.log(data));
main();