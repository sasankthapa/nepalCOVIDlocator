const Nightmare=require('nightmare');
const cheerio=require('cheerio');

const nightmare=Nightmare();
const url='https://kathmandupost.com/health'
console.log('Trying to scrape from ktm post');
nightmare.goto(url)
    .wait('.block--morenews')
    .evaluate(()=>document.querySelector('.block--morenews').innerHTML)
    .end()
    .then(response=>{
        getData(response);
    })

getData=(html)=>{
    console.log('here')
    const news=[];
    const $=cheerio.load(html);
    
    $('.article-image').each((index,element)=>{
        const currentNews={}

        currentNews['title']=$(element).find('a:nth-child(2)').find('h3').html();
        currentNews['link']=$(element).find('a').attr('href');

        console.log(currentNews)
        news.push(currentNews)
    })
    console.log(news.length);
}