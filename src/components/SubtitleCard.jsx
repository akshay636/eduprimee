import React from 'react';
import { AiOutlineEye } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import '../Styles/subtitleCard.css'

const SubtitleCard = (props) => {
    
    return (
       <div className="container mt-3 " onClick={props.handleClick}>
        <div className="card subcard card-video mb-3" style={{width:'100%'}} key={props.index}>
        <div className="row g-0 container">
            <div className="col-lg-2 col-md-3">
                <img src={props.img} className="img rounded-start" style={{ width: "100%" }} />
            </div>
            <div className="col-lg-10 col-md-9">
                <div className="card-body">
                    <h2 className="card-title mt-1 text-truncate text-start " style={{ fontSize: "20px"}} >{props.title}</h2>
                    <p className="card-text" style={{textAlign:'left'}}>By: {props.channelTitle}</p>
                    <div className="d-flex">
                        <p className="card-text"><MdOutlineWatchLater /> {props.Duration}</p>
                        <p className="card-text" style={{ marginLeft: "auto" }}><AiOutlineEye />  {props.views}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default SubtitleCard;
