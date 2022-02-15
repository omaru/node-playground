function asincrona(cb){
    setTimeout(()=>{
        throw new Error('error');

    },1000);

}

asincrona();