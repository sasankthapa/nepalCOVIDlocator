const Nightmare=require('nightmare');
const cheerio=require('cheerio');

const nightmare=Nightmare();
const url='http://annapurnapost.com/latest-news'
console.log('Trying to scrape from annapurna post');
nightmare.goto(url)
    .wait('.category-block')
    .evaluate(()=>document.querySelector('.category-block').innerHTML)
    .end()
    .then(response=>{
        getData(response);
    }).catch(err=>{
        console.log(err);
    })

getData=(html)=>{
    console.log('here')
    const news=[];
    const $=cheerio.load(html);
    
}