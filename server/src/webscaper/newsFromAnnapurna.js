const Nightmare=require('nightmare');
const cheerio=require('cheerio');

const nightmare=Nightmare();
const url='http://annapurnapost.com/latest-news'

const getPromiseAnnapurna= () =>{
    getData=(html)=>{
        const news=[];
        const $=cheerio.load(html);
        
        $('div.col-xs-12').each((index,element)=>{
            const currentNews={}
            info = $(element).find('.single-category-text')
            currentNews['title']=info.find('h1').find('a').html();
            currentNews['link']=info.find('h1').find('a').attr('href');
            if(currentNews['title'].includes('&#x915;&#x94B;&#x930;&#x94B;&#x928;&#x93E;'))
                news.push(currentNews);
        })
        console.log('annapurna, done')
        return news;
    }

    console.log('Trying to scrape from annapurna post');
    return new Promise((resolve,reject)=>{
        nightmare.goto(url)
        .wait('.category-block')
        .evaluate(()=>document.querySelector('.category-block').innerHTML)
        .end()
        .then(response=>{
            resolve(getData(response));
        }).catch(err=>{
            reject(err);
        })
    })
}


module.exports=getPromiseAnnapurna