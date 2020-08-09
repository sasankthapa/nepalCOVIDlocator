const Nightmare=require('nightmare');
const cheerio=require('cheerio');

const nightmare=Nightmare();
const url='https://kathmandupost.com/health'

const getPromiseKtmPost = () => {
    console.log('Trying to scrape from ktm post');
    return new Promise((resolve,reject)=>{
        nightmare.goto(url)
            .wait('.block--morenews')
            .evaluate(()=>document.querySelector('.block--morenews').innerHTML)
            .end()
            .then(response=>{
                resolve(getData(response));
            }).catch((err)=>{
                reject(err);
            })
    })
}

getData=(html)=>{
    console.log('here')
    const news=[];
    const $=cheerio.load(html);
    
    $('.article-image').each((index,element)=>{
        const currentNews={}
        currentNews['title']=$(element).find('a:nth-child(2)').find('h3').html();
        currentNews['link']=$(element).find('a').attr('href');

        if(currentNews['title'].includes('&#x915;&#x94B;&#x930;&#x94B;&#x928;&#x93E;'))
            news.push(currentNews)
    })
    return news
}

module.exports=getPromiseKtmPost