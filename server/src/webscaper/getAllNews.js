const fs = require('fs');

const getPromiseFromAnnapurna=require('../webscaper/newsFromAnnapurna');
const getPromiseKtmPost=require('../webscaper/newsFromKtmPost');
const getPromiseEkantipur=require('../webscaper/newsFromEkantipur');

const PATH="/home/sasank/Documents/shellscripts/data/";

async function getAndSaveData(){
    fs.writeFileSync(PATH+'annapurnaNews.json',JSON.stringify(await getPromiseFromAnnapurna()))
    fs.writeFileSync(PATH+'ktmpostNews.json',JSON.stringify(await getPromiseKtmPost()))
    fs.writeFileSync(PATH+'ekantipurNews.json',JSON.stringify(await getPromiseEkantipur()))
    console.log('DOne?')
}

getAndSaveData()