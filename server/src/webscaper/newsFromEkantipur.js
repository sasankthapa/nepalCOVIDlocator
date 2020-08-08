const Nightmare=require('nightmare');
const cheerio=require('cheerio');

const nightmare=Nightmare();
const url='https://ekantipur.com/news'
console.log('Trying to scrape from ktm post');
nightmare.goto(url)
    .wait('.col-xs-10.col-sm-10.col-md-10')
    .evaluate(()=>document.querySelector('.col-xs-10.col-sm-10.col-md-10').innerHTML)
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
    $('.normal').each((index,element)=>{
        const currentNews={} 
         
        currentNews['title']=$(element).find('a').html();
        currentNews['link']=$(element).find('a').attr('href')

        console.log(currentNews)
        news.push(currentNews)
    })
    console.log(news.length);
}   