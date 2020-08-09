const Nightmare=require('nightmare');
const cheerio=require('cheerio');

const nightmare=Nightmare();
const url='https://ekantipur.com/news'

const getPromiseEkantipur = () =>{
    console.log('Trying to scrape from ekantipur.com');
    return new Promise((resolve,reject)=>{
        nightmare.goto(url)
        .wait('.col-xs-10.col-sm-10.col-md-10')
        .evaluate(()=>document.querySelector('.col-xs-10.col-sm-10.col-md-10').innerHTML)
        .end()
        .then(response=>{
            resolve(getData(response));
        }).catch(err=>{
            reject(err);
        })    
    })
}

getData=(html)=>{
    console.log('here')
    const news=[];
    const $=cheerio.load(html);
    $('.normal').each((index,element)=>{
        const currentNews={} 
         
        currentNews['title']=$(element).find('a').html();
        currentNews['link']=$(element).find('a').attr('href')

        if(currentNews['title'].toLowerCase().includes('covid'))
            news.push(currentNews)
    })
    return news
}   

module.exports=getPromiseEkantipur