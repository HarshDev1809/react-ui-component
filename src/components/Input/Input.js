import React from "react";

function Input({value,onChange}){

    const handleOnChange = (e)=>{
        onChange(e.target.value);
    }
    return <input type="text" placeholder="enter a text" value={value} onChange={handleOnChange}></input>
}

export default Input;