const fs = require('fs');
const pdf = require('pdf-parse');

const pdfFolder = './Data/';

fs.readdirSync(pdfFolder).forEach(file => {
  console.log(file);
});
//./Data/SitRep#114_02-06-2020/SitRep#114_COVID-19_02-06-2020_EN.pdf
let dataBuffer1 = fs.readFileSync('./Data/SitRep#113_01-06-2020/SitRep#113_COVID-19_01-06-2020_EN.pdf');
let dataBuffer2 = fs.readFileSync('./Data/SitRep#155_13-07-2020/SitRep#155_COVID-19_13-07-2020_EN.pdf');

pdf(dataBuffer1).then(function(data) {
 
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata); 
    // PDF text
    console.log(data.text); 
        
});
pdf(dataBuffer2).then(function(data) {
 
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata); 
    // PDF text
    console.log(data.text); 
        
});