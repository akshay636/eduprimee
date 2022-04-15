import React from 'react';
import ChannelCard from './ChannelCard';

const Channel = (props) => {
  return (
    <div>
     {
        (props.channeList?.length === 0) ? <div></div> :
                            <div className='container-fluid mt-5'>
                                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
                                    {props.channeList[0]?.map((val,index)=>{
                                       
                                        return(
                                            <>
                                            <ChannelCard
                                                index={index}
                                                img={val?.snippet?.thumbnails?.high.url}
                                                title={val?.snippet?.title}
                                                channelTitle={val?.snippet?.channelTitle}


                                            />
                                               
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
     }
    </div>
  );
}

export default Channel;
