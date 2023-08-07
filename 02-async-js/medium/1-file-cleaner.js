// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman -->
// ```

var fs = require('fs');

fs.readFile('../abc.txt','utf-8', (err,data) => {
    console.log("Data before cleaning : "+data);
    let newData = data.replace(/\s+/g,' ').trim()
    fs.writeFile('../abc.txt', newData, (err) => {
        if(err){ 
            console.log(err);
        }
    })
});