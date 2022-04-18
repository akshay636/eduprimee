import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { FiSearch } from 'react-icons/fi'
import './Home.css'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import SubtitleCard from './SubtitleCard';
import SubtitleDotLine from './SubtitleDotLine';
import '../Styles/searchInObj.css'
import { faL } from '@fortawesome/free-solid-svg-icons';
const ytDuration = require('youtube-duration')

const SearchInObj = (props) => {
    const [open, setOpen] = useState(false);  //youtube video modal state
    const [input, setinput] = useState('');    //first input state
    const [resultss, setResults] = useState([]);//subtile state
    const [vid, setvid] = useState('');          //video id state
    const [mod, setmodal] = useState(false);     //show modal when click state
    const [time, settime] = useState('');       //video time state
    const[about,setabout]=useState(false);

    const onOpenModal = () => setOpen(true);  //youtube video modal state

     const [ind,setind]=useState(null);

    const onCloseModal = () => setOpen(false); //youtube video modal state

    const [hide, sethide] = useState('none');
    
    const handleClick=(index)=>{
        if(hide===''){
            sethide('none')
        }
        else{
            sethide('');
        }
    }

   const handleInput=(e)=>{
    setinput(e.target.value);
     setResults([]);
     setabout(false)

   }

    const changeTime = (seconds,id) => {
        setmodal(true);
        setvid(id);
        settime(parseInt(seconds));
    }

    const searchh = (e) => {
        e.preventDefault();
       
        if(resultss[0]?.length===0){
            setabout(false);
        }
        else{
            setabout(true)
        }
         setabout(true);
         searchFor(input)
        // console.log('search data', searchFor(input));
        console.log('resulss',resultss.length)
    }

    const trimString=(s)=> {
        let l = 0, r = s.length - 1;
        while (l < s.length && s[l] === ' ') l++;
        while (r > l && s[r] === ' ') r -= 1;
    
        return s.substring(l, r + 1);
    }

    const compareObjects=(o1, o2)=> {
        let k = '';
        for (k in o1) if (o1[k] !== o2[k]) return false;
        for (k in o2) if (o1[k] !== o2[k]) return false;
        return true;
    }

    const itemExists=(haystack, needle)=> {
        for (let i = 0; i < haystack.length; i++) if (compareObjects(haystack[i], needle)) return true;
        return false;
    }

    const searchFor=(toSearch)=> {

        toSearch = trimString(toSearch);
        if (props.data?.length === 0) {
        }
        else {
            props.data?.map((val) => {
                let results = []
                for (let i = 0; i < val.length; i++) {
                    for (let key in val[i]) {
                        if (val[i][key].indexOf(toSearch) !==-1) {
                            if (!itemExists(results, val[i])) results.push(val[i]);
                        }
                    }
                }
                return setResults((val) => {
                    return [...val, results]
                });  
            })
        } setinput('')
    }  
    console.log('state is',hide)
    return (
        <div>
       
        <form  onSubmit={searchh}>
            <input id='subt-input' required='required' value={input} onChange={handleInput} style={{position:'relative'}} />
            
            <button id='subt-btn'  onClick={searchh} className='btn-success' style={{position:'absolute'}}><FiSearch id='svg-1'/></button></form>
             <br></br>
            {
                
            }
            {(resultss[0]?.length!==0)?about && <h3 id='subt-h3'>About {props.id?.length} results</h3>:<h3>No data found</h3>}
            {props.listcap.map((val, index) => {
                return (
                    <>  {(resultss?.length === 0) ? <div></div> : 
                      (resultss?.[index]?.length===0)?<div></div>:<div>
                    <div>
                         
                           <SubtitleCard
                                key={index}
                               img={val?.[0]?.snippet?.thumbnails?.medium?.url}
                               title={val?.[0]?.snippet?.title}
                               channelTitle= {val?.[0]?.snippet?.channelTitle}
                               Duration={ytDuration.format(val[0]?.contentDetails?.duration)}
                               views={props.checkViews(val[0]?.statistics?.viewCount)} 
                               handleClicke={handleClick}
                               setind={setind}
                           />
                            
                        <div 
                            className="container-k container cyt overflow-scroll"
                            style={{ backgroundColor: "#FFF1F3" }}
                        >
                            {resultss[index]?.map((val,index1) => {                              
                                return (
                                    <SubtitleDotLine
                                       key={index1}
                                        hide={hide}
                                        start={val?.start}
                                        text={val?.text}
                                        id={props?.id[index]}
                                        changeTime={changeTime}
                                       onOpenModal={onOpenModal}
                                    />
                                
                                );
                            })}
                        </div>
                    </div>
                    </div>
                    }
                    </>
                )
            })}
                       
            {
                mod &&
                <div style={{zIndex:"100"}}>
                    <Modal open={open} onClose={onCloseModal} center>
                            <YouTube videoId={vid} opts={{
                                playerVars: {
                                    autoplay: 1,
                                    start: parseInt(time)
                                }
                            }} />
                    </Modal>
                </div>
            }    
        </div>
    );
}
export default SearchInObj;
                                       