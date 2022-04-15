import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import '../Styles/dropdown.css'
const Dropdown = (props) => {

  return (
      <div id='dd'>
    <div className="dropdown">
    <button className="btn dropdown-icon dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
        {props.text} &nbsp;&nbsp; &nbsp;&nbsp;<IoIosArrowDown id='arrowdown'/>
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" onClick={props.url} href="#"><div style={{ position: "absolute" }}>
            <div id='on'>
                <div id="outer-circle" style={{ border: `1.5px solid ${props.color}` }}>
                    <div id="inner-circle" style={{ background: `${props.color}` }}>
                    </div>
                </div>
            </div>
        </div>&nbsp; &nbsp;Youtube Url</a></li>
        <li><a className="dropdown-item" onClick={props.channel}>
            <div id='on1'>
                <div id="outer-circle1" style={{ border: `1.5px solid ${props.colorr}` }}>
                    <div id="inner-circle1" style={{ background: `${props.colorr}` }}>
                    </div>
                </div>
            </div> &nbsp; &nbsp; <p className='yc'>Youtube Channel</p>
        </a></li>
    </ul>
</div>
</div>
  );
}

export default Dropdown;
