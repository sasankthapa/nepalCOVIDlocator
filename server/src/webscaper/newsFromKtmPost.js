const Nightmare=require('nightmare');
const cheerio=require('cheerio');

const nightmare=Nightmare();
const url='https://kathmandupost.com/health'

const getPromiseKtmPost = () => {
    getData=(html)=>{
        const news=[];
        const $=cheerio.load(html);
        
        $('.article-image').each((index,element)=>{
            const currentNews={}
            currentNews['title']=$(element).find('a:nth-child(2)').find('h3').html();
            currentNews['link']=$(element).find('a').attr('href');
    
            if(currentNews['title'].toLowerCase().includes('covid'))
                news.push(currentNews)
        })
        console.log("ktmpost,done")
        return news
    }

    console.log('Trying to scrape from ktm post');
    return new Promise((resolve,reject)=>{
        nightmare.goto(url)
            .wait('.block--morenews')
            .evaluate(()=>document.querySelector('.block--morenews').innerHTML)
            .end()
            .then(response=>{
                const news=getData(response)
                resolve(news);
            }).catch((err)=>{
                reject(err);
            })
    })
}

module.exports=getPromiseKtmPost