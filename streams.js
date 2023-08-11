const fs = require('fs')

const readstream = fs.createReadStream('./docs/blog2.txt')
const writestream = fs.createWriteStream('./docs/blog3.txt')

// reading data form file in strams 
readstream.on('data', (content)=>{
    console.log("---NEW CONTENT---");
    console.log(content);

    // writing data into a file 
    writestream.write('\nNEW CONTENT\n');
    writestream.write(content);
})

// pipe method

readstream.pipe(writestream);