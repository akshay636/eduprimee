import React from 'react';
import '../Styles/subtitleDotLine.css'
const SubtitleDotLine = (props) => {
    return (
        <div>
        <div className="row" >
            <div>
                <hr />
                <div className="mx-2 mt-0" onClick={() => { props.changeTime(props.start, props.id); props.onOpenModal() }}>
                    <div
                        onClick={() => { props.changeTime(props.start, props.id); props.onOpenModal() }}
                        className="dot-k" id='dot'
                    >
                        <div className='outer'></div>
                        <div className='inner'></div>
                    </div>
                    <div id='div-text' >
                        <p id='div-time' >from {props.start}</p>
                        <p id='div-sentence'
                            className="card-text text-truncate"
                        >
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SubtitleDotLine;
