// using the file system module 
const fs = require('fs')


// read file
// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })

// write file

fs.writeFile('./docs/blog1.txt', "hello world", ()=>{
    console.log("file written success");
})
// creating directories 
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('folder creates successfully');
//         }
//     })
// }else{
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         consolefs.writeFile('./docs/blog1.txt', "hello world", ()=>{
//             console.log("file written success");
//         }).log('folder deleted');
//     })
// }

// delete file 
// const file = './docs/deleteme.txt'

// if(fs.existsSync(file)){
//     fs.unlink(file, (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     })
// }