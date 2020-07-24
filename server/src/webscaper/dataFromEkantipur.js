const Nightmare=require('nightmare');
const fs=require('fs');
const cheerio=require('cheerio')

const nightmare=Nightmare();
const url="https://kathmandupost.com/covid19"
console.log('here1')
nightmare
    .goto(url)
    .wait('table#DataTables_Table_0')
    .evaluate(()=>document.querySelector('#DataTables_Table_0_wrapper').innerHTML)
    .end()
    .then(response=>{
        getData(response);
    }).catch(err=>{
        console.log(err);
    })

let getData = html =>{
    console.log('here');
    const districts=[];
    const $=cheerio.load(html);
    $('tbody tr').each((index,element)=>{
        const toAddMap={}

        toAddMap['name']=$(element).find('.district-name').html().toLowerCase()
        toAddMap['total']=$(element).find('.total').html()
        toAddMap['deaths']=$(element).find('.deaths').html()
        toAddMap['recovered']=$(element).find('.recovered').html()
        toAddMap['readmitted']=$(element).find('.readmitted').html()
        
        districts.push(toAddMap);
    })
    //Absolute path will be here.
    fs.writeFileSync('/home/sasank/WebsiteData/nepalCOVID/DistrictsData.json',JSON.stringify(districts));
}
