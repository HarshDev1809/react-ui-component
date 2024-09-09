import React from "react";
import ButtonStyle from "./Button.module.css"

function Button({onClick, placeHolder}){
    return <button className={ButtonStyle.btn} onClick={onclick ? onClick : ()=>{console.log("no function")}}>{placeHolder? placeHolder : "Click me"}</button>
}

export default Button;