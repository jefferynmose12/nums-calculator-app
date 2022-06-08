import React from "react";

type ButtonProps = {
  symbol: string | any;
  color ?: string;
  wide ?: string;
  handleClick ?: (event: React.MouseEvent<HTMLButtonElement>, symbol: string) => void
}

export const Button = ({symbol, color, wide, handleClick}: ButtonProps) => {
  
  return (
    <button 
      style={{backgroundColor : color, width : wide}} 
      onClick={(event) => {handleClick && handleClick(event, symbol)}}
    >
      {symbol}
    </button>
  )
}