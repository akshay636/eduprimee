import React from 'react';
import image7 from '../image 7.png'
const Header = () => {
  return (

        <div className='col-lg-12 col-md-12 col-sm-12 '>
            <img src={image7} />
            <h5 className='mt-3 tool'> Tool To Search Within Video in 2 Simple Steps :- </h5>
            <div className='step-btn-div'>  <button className='step-1' >1</button><div className='dashed'></div><button className='step-2'>2</button></div>
            <p className='mt-3 text-muted'><b>Select The Video Link or Video Channel From Youtube</b>(You Can Select Upto 10 Videos or 1 Channel in this demo version)</p>
        </div>
   
  );
}

export default Header;
