import React from 'react';
import '../Styles/channelCard.css'
const ChannelCard = (props) => {
  return (
    <div key={props.index} className='col'>
    <div className="card mt-5" id='channelCard' >
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        {/* <div style={{ position: "absolute", top: "-5%", right: "-3%" }}>
            <button style={{ width: "35px", height: "35px", borderRadius: "50%" }} className='btn btn-danger' onClick={() => Del(index)}><div style={{ border: '0.5px solid white' }}></div></button>
        </div> */}
        <div className="card-body" id='channel-card-body' >
            <p className="card-title text-truncate" id='channel-title' ><b>{props.title}</b></p>
            <p id='channel-title1'  >By{props.channelTitle}</p>
            <div id='subdiv' >
                
            </div>
        </div>
    </div>
</div>
  );
}

export default ChannelCard;
