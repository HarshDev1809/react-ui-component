import React from "react";
// import ButtonStyle from "./Button.module.css"

function Button({onClick,style}){
    const newStyle = {heigth: "40vh"}
    return <button className={ButtonStyle.btn} style={style} onClick={onClick}>CLick me</button>
}

export default Button;