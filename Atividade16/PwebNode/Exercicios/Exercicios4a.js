const fs = require('fs'); 

function Parte1(){
    for(let i = 1; i<= 10;i++){
        console.log('primeira parte: '+ i);
    }
}

setTimeout(Parte1, 2000);

fs.readFile('cidade.txt', (err, data) => {
    if(err) throw err;
    const registros = data.toString().split('\n');
    registros.forEach((registro, index) => {
        console.log("  segunda parte: " + index + " " + registro);
    });
});