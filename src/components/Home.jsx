import React, { useState } from 'react';
import getVideoId from 'get-video-id';
import Channel from './Channel';
import './Home.css'
import Youapi from './Youapi';
import { getSubtitles } from 'youtube-captions-scraper';
import SearchInObj from './SearchInObj';
import Header from './Header';
import Dropdown from './Dropdown';
import InputForm from './InputForm';
import AlertModal from './AlertModal';
const Home = () => {
    const [list, setList] = useState([]);              //youtube video data state 
    const [channeList, setChannelList] = useState([]); //channelvideo data state
    const [id, setids] = useState([]);                 //video id state
    const [input, setinput] = useState('');            //home input state
    const [text, settext] = useState('Youtube url link');//url text state
    const [color, setcolor] = useState('green');         //dropdown color change state
    const [colorr, setcolorr] = useState('black');       //dropdown colorr component
    const [data, setData] = useState([]);                //all data state
    const [showvideo, setvideoshow] = useState(false);   // video modal state
    const [show, setshow] = useState(false);             //subtitle data show state
    const [listcap, setListcap] = useState([]);          //find specific word in subtitle state
    const [alertshow, setalertShow] = useState(false);   //alert modal state

    const alerthandleClose = () => setalertShow(false);  //alert modal state
    const alerthandleShow = () => setalertShow(true);    //alert modal state

    const getInput = (e) => {
        e.preventDefault();
        setinput(e.target.value);
    }

    const apiUrl = async () => {
        let mounted = true;
        await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${getVideoId(input).id}&key=AIzaSyD9d5mLmQEw1G9GaPfEYR0YS33zrTiC1Hc&part=snippet,contentDetails,statistics`).then((res) => res.json()).then(
            (items) => {
                if (mounted) {
                    if (list.length < 10) {
                        setList((val) => {
                            return ([...val, items.items])
                        });
                    }
                    else {
                        setalertShow(true);
                    }
                }
                setinput('')
            }
        )
        return () => mounted = false;
    }
    const apiChannel = async () => {
        let mounted = true;
        let equal = input.split("channel/").pop();
        await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD9d5mLmQEw1G9GaPfEYR0YS33zrTiC1Hc&channelId=${equal}&part=snippet,id&order=date&maxResults=5`).then((res) => res.json()).then(
            (items) => {
                if (mounted) {
                    setChannelList((val) => {
                        return ([...val, items.items])
                    });
                }
                setinput('')
            }
        )
        return () => mounted = false;
    }
    const handleURLSearch = (e) => {
        e.preventDefault();
        if (text === 'Youtube url link') {
            e.preventDefault();
            apiUrl();
            setinput('');
            if (listcap.length <=9) {
                getSubtitles({
                    videoID: getVideoId(input).id,
                    lang: 'en'
                }).then((captions) => {
                    setids((val1) => {

                        return ([...val1, getVideoId(input).id])
                    })
                    setData((val) => {
                        return ([...val, captions])
                    })
                    const captionData = async () => {
                        let mounted = true;
                        await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${getVideoId(input).id}&key=AIzaSyD9d5mLmQEw1G9GaPfEYR0YS33zrTiC1Hc&part=snippet,contentDetails,statistics`).then((res) => res.json()).then(
                            (items) => {
                                setListcap((val, index) => {
                                    return ([...val, items.items])
                                });
                            }
                        )
                        return () => mounted = false;
                    }
                    captionData();
                })
            }
            else {
                setalertShow(true);
            }
        }
        else {
            e.preventDefault();
            apiChannel();
            setinput('');
        }
    }


    const checkViews = (num) => {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num < 900) {
            return num;
        }
    }
    const url = () => {
        settext('Youtube url link');
        setcolor('green');
        setcolorr('black');
    }
    const channel = () => {
        setList([]);
        setcolor('green');
        setcolor('black');
        setcolorr('green');
        settext('Youtube channel');
    }
    const handleSubtitle = (e) => {
        e.preventDefault();
        setshow(true);
        setvideoshow(true)
    }
    return (
        <>
            <div>
                <div className='mt-2'>
                    <div className='row text-center'>
                        <Header />
                    </div>
                    <div className="input-group justify-content-center">
                        <Dropdown
                            text={text}
                            color={color}
                            colorr={colorr}
                            url={url}
                            channel={channel}
                        />
                        <InputForm
                            handleURLSearch={handleURLSearch}
                            getInput={getInput}
                            text={text}
                            input={input}
                        />
                    </div>
                </div>
            </div>
            {
                (text === 'Youtube url link') ? <Youapi
                    list={list}
                    checkViews={checkViews}
                    setList={setList}
                /> :
                    <Channel
                        channeList={channeList}
                    />
            }
            {
                (list.length === 0) ? <div></div> :
                    <div>
                        <button className='btn-success subSearch_btn' type="submit" onClick={handleSubtitle} >Search</button>
                        {
                            show && <SearchInObj

                                list={list}
                                data={data}
                                listcap={listcap}
                                showvideo={showvideo}
                                checkViews={checkViews}
                                id={id}
                            />
                        }
                    </div>
            }
            <AlertModal
                alertshow={alertshow}
                alerthandleClose={alerthandleClose}
                alerthandleShow={alerthandleShow}


            />
        </>
    );
}
export default Home;
