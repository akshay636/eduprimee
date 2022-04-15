import React from 'react';
import { AiOutlineEye, AiOutlineMinus } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import ApiCard from './ApiCard'
const ytDuration = require('youtube-duration')
const Youapi = (props) => {
    const Del = (id) => {
        console.log('working',id)
        props.setList((val) => {
            return val.filter((el, index) => {
                return index !== id;
            })
        })
console.log('props',props.list)
    }
    return (
        <div>
            {
                (props.list?.length === 0) ? <div></div> :
                    <div className='container-fluid mt-5'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
                            {props.list?.map((val, index) => {
                                return (
                                    <ApiCard
                                        key={index}
                                        index={index}
                                        img={val[0]?.snippet?.thumbnails?.high.url}
                                        Del={Del}
                                        title={val[0]?.snippet?.title}
                                        channelTitle= {val[0]?.snippet?.channelTitle}
                                        Duration={ytDuration.format(val[0]?.contentDetails?.duration)}
                                       views= {props.checkViews(val[0]?.statistics?.viewCount)}
                                    />
                                )
                            })}
                        </div>
                    </div>
            }
        </div>
    );
}
export default Youapi;

