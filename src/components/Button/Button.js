import React, { useEffect } from "react";
import ButtonStyle from "./Button.module.css";
import { buttonStyle } from "../../utils/constants/defaultCSS";
import commonStyle from "../../utils/constants/commonCSS.module.css"

function Button({
  onClick,
  placeHolder,
  variant = "default",
  height = 8,
  width = 10,
  fontSize = 1,
  borderRadius = 7,
  shadow = false,
  minWidth = 100,
  minHeight = 50
}) {

  const style = {
    height: `${height}vh`,
    width: `${width}vw`,
    fontSize: `${fontSize}rem`,
    borderRadius: `${borderRadius}px`,
    minWidth: `${minWidth}px`,
    minHeight: `${minHeight}px`
  };

  const finalStyle = {...buttonStyle, ...style};

  const buttonClass = ButtonStyle[variant];

  return (
    <button
      className={`${buttonClass} ${shadow? commonStyle.shadow : ""}`}
      style={finalStyle}
      onClick={
        onClick
          ? onClick
          : () => {
              console.log("no function");
            }
      }
    >
      {placeHolder ? placeHolder : "Click me"}
    </button>
  );
}

export default Button;
