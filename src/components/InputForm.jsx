import React from 'react';
import '../Styles/inputform.css'
const InputForm = (props) => {
  return (
    <div className="form-group w-50 ">
    <div className='from-g' id='sdiv' >
    <form onSubmit={props.handleURLSearch} >
        <input type="text" className="form-control input" required='required' onChange={props.getInput} placeholder={props.text} value={props.input} /></form>
        <div className='div-btn'>
            <button type="submit" onClick={props.handleURLSearch} className="btn  input_button"><span>+</span></button>
        </div>
    </div>
</div>

  );
}

export default InputForm;
