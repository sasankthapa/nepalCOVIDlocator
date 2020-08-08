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
    
    $('div.col-xs-12').each((index,element)=>{
        const currentNews={}
        
        info = $(element).find('.single-category-text')

        currentNews['title']=info.find('h1').find('a').html();
        currentNews['link']=info.find('h1').find('a').attr('href');

        console.log(currentNews);
        news.push(currentNews);
    })
    console.log(news.length)
}