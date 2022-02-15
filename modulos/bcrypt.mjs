import bcrypt from 'bcrypt'

const password ='123pum45';

bcrypt.hash(password,5)
.then((hash)=>bcrypt.compare(password,hash).then((resultado)=>console.log(resultado)));