import React from 'react';
import { AiOutlineEye, AiOutlineMinus } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import '../Styles/ApiCard.css'
const ytDuration = require('youtube-duration')

const ApiCard = (props) => {
    return (
        <div key={props.index} className='col'>
            <div className="card mt-5 apicard">
                <img className="card-img-top" src={props.img} alt="Card image cap" />
                <div className='del' >
                    <button className='btn btn-danger' onClick={() => props.Del(props.index)}><div id='subdiv'></div></button>
                </div>
                <div className="card-body" id='api-card-body'>
                    <p className="card-title text-truncate" id='api-card-title' ><b>{props.title}</b></p>
                    <p id='channel-title' >By{props.channelTitle}</p>
                    <div id='card-footer'>
                        <p id='footer-p' ><MdOutlineWatchLater /> {props.Duration}</p>
                        <p id=''  style={{marginLeft:'auto',fontSize:'10px'}} className="card-text" ><AiOutlineEye /> {props.views} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiCard;



