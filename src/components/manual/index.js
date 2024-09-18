import fs from "fs/promises";


fs.writeFile('kd.txt', 'hacked ! hacked ! hacked !', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});

async function readFile() {
    try{
        const data = await fs.readFile("kd.txt","utf-8");
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
}
    
readFile();

const word = "kartik Doda ";
console.log(word.trim());


async function trim() {
    try{
        const data = await fs.readFile("kd.txt","utf-8");
        console.log(data.trim());
    }
    catch(error){
        console.log("Error", error)
    }
}

trim();