import React, { useState } from 'react';
import PropTypes from 'prop-types';
 
function Input({ addPost }){
const[Input,setInput] = useState('');

function Change(event){
    setInput(event.target.value);
}
function Enter(event){
    const title = event.target.value;

    if(event.key == 'Enter' && title)
    {   
        addPost(title);
        setInput('');
    }
}


    return(
    <div>
        <div>กรุณาใส่ข้อมูล</div>
        <input type="text" value={Input} onChange={Change} onKeyDown={Enter} />

    </div>
    );

    
}

Input.proptype = {
 addPost : PropTypes.func.isRequired

};
export default Input;