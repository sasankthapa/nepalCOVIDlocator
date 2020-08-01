import React, { useState } from 'react'

import { getNews } from '../../APIs/axios'

import {lastUpdated,infoMessage} from '../../APIs/getDataImp'

import classes from './News.module.css'

const News=(props)=>{
    const [news,updateNews] = useState([]);
    
    if(news.length===0){
        getNews(updateNews);
    }

    return (<div className={classes.MainContainer}>
        {news.length===0?'':news.map((element,index)=>{
            return (<div key={element.title+String(index)} className={classes.NewsContainer}>
                    <h3>{element.title}</h3>
                    <p>{element.body}</p>
                    <small>{element.date}</small>
            </div>)
        })} 
        <div className={classes.Info}>
            <p>
                <strong>Namaste,</strong><br/>
                <br/>

                From the District page you can see district by district seperation of COVID.<br/><br/>
                Please contact if you have exact locations of quarentine facilities so we all are able to see potentially dangerous places.<br/><br/>
                <a href="mailto: sasank.thapa2000@gmail.com" style={{float:"right"}}>mail</a><br/><br/>
                <small><i>{infoMessage}</i></small>
                <span style={{fontSize:'0.8rem'}}>Take care everyone <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">💚</span></span><br/>
                <small><i>{lastUpdated}</i></small>
            </p>
        </div>   
    </div>)
}

export default News