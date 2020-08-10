import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import {Link} from 'react-router-dom'

import classes from './News2.module.css';
import { getKtmPostNews, getAnnapurnaNews, getEkantipurNews} from '../../APIs/getNews'

class News2 extends React.Component{
    state={
        annapurna:[],
        ktmpost:[],
        ekantipur:[]
    }
    
    componentDidMount(){
        if(this.state.annapurna.length===0){
            getAnnapurnaNews().then(data=>{
                this.setState({annapurna:data.data})
            })
        }  
        if(this.state.ktmpost.length===0){
            getKtmPostNews().then(data=>{
                console.log('asdlfkjalsjdfk')
                this.setState({ktmpost:data.data})
            })
        }  
        if(this.state.ekantipur.length===0){
            getEkantipurNews().then(data=>{
                this.setState({ekantipur:data.data})
            })
        }  
    }

    render(){
        if(window.innerWidth<=610){
            return(
                <div className={classes.MainContainer}>
                    <div className={classes.NewsContainer}>
                    <p style={{fontWeight:'bold'}}>Annapurna Recents:</p> 
                    {this.state.annapurna.length>0?this.state.annapurna.map((element)=>{
                        return (<p key={element.link}><Link target="_blank" to={'//www.annapurnapost.com'+element.link} rel="noopener noreferrer">{ReactHtmlParser(element.title)}</Link></p>)
                    }):"loading..."}
                    <p style={{fontWeight:'bold'}}>Kathmandu Post Recents:</p>
                    {this.state.ktmpost.length>0?this.state.ktmpost.map((element)=>{
                        return (<p key={element.link}><Link target="_blank" to={'//www.kathmandupost.com'+element.link} rel="noopener noreferrer">{ReactHtmlParser(element.title)}</Link></p>)
                    }):"loading..."}
                    <p style={{fontWeight:'bold'}}>Ekantipur Recents:</p>
                    {this.state.ekantipur.length>0?this.state.ekantipur.map((element)=>{
                    return (<p key={element.link}><Link target="_blank" to={'//www.ekantipur.com'+element.link} rel="noopener noreferrer">{ReactHtmlParser(element.title)}</Link></p>)
                    }):'loading...'}
                    </div>
                </div>
            )
        }
        return(<div className={classes.MainContainer}>
            <div className={classes.NewsContainer}>
                <p style={{fontWeight:'bold'}}>Annapurna Recents:</p> 
                {this.state.annapurna.length>0?this.state.annapurna.map((element)=>{
                    return (<p key={element.link}><Link target="_blank" to={'//www.annapurnapost.com'+element.link} rel="noopener noreferrer">{ReactHtmlParser(element.title)}</Link></p>)
                }):"loading..."}
            </div>
            <div className={classes.NewsContainer}>
                <p style={{fontWeight:'bold'}}>Kathmandu Post Recents:</p>
                {this.state.ktmpost.length>0?this.state.ktmpost.map((element)=>{
                    return (<p key={element.link}><Link target="_blank" to={'//www.kathmandupost.com'+element.link} rel="noopener noreferrer">{ReactHtmlParser(element.title)}</Link></p>)
                }):"loading..."}
            </div>
            <div className={classes.NewsContainer}>
                <p style={{fontWeight:'bold'}}>Ekantipur Recents:</p>
                {this.state.ekantipur.length>0?this.state.ekantipur.map((element)=>{
                    return (<p key={element.link}><Link target="_blank" to={'//www.ekantipur.com'+element.link} rel="noopener noreferrer">{ReactHtmlParser(element.title)}</Link></p>)
                }):'loading...'}
            </div>
        </div>)    
    }
}

export default News2;