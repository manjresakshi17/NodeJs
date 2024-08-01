// const fs= require('fs');
const fsPromises= require('fs').Promises;
const path=require('path');

const fileOps = async ()=>{
    try{
const data=await fsPromises.readFile(path.join('../files/starter.txt'),'utf8');
    console.log(data);
 
    }catch(err){
     console.error(err);
    }   
}
fileOps();
// console.log("sakshi ")

// fs.writeFile(path.join('../files/reply.txt'),'Nice to meet you.',(err)=>{
//     if(err) throw err;
//      console.log('write complete');
// })

// fs.appendFile(path.join('../files/test.txt'),'testing text.',(err)=>{
//     if(err) throw err;
//      console.log('Append complete');
// })


// //exit on uncaugth errors
// process.on('uncaughtException',err=>{
//     console.error(`There was an uncaugth error:${err}`);
//     process.exit(1);

// })