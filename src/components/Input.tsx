import React from 'react'

type InputProps = {
    result: any | string,
    text: any | string,
}

function Input({result, text}: InputProps) {
  return (
    <div className='input-wrapper'>
        <div className='result'>
            <h1>{result}</h1>
        </div>
        <div className='text'>
            <h3>{text}</h3>
        </div>
    </div>
  )
}

export default Input