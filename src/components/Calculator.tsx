import React, { useState } from 'react';
import '../styles/style.css'
import { Button } from './Button';
import Input from './Input';
import * as math from "mathjs";

function Calculator(): JSX.Element {
    const [result, setResult] = useState<any | string>("");
    const [text, setText] = useState<any | string>("");

    const bgColor = "#f2a33c";

    const addToText = (event: any, symbol: string | any) => {
        setText((text: any | string) => [...text, symbol]);
    }

    const reset = () => {
        setResult("");
        setText("");
    }

    const calculateResult = () => {
        const input = text.join("");
        console.log(input);
        setResult(math.floor(math.evaluate(input)));
    }

    const percentage = () => {
        const input: string | number | any = text.join("");
        const what = math.floor(math.evaluate(input))
        setResult(what/100);
    }

  return (
    <div className='body-container'>
        <div className="container">
            <Input result={result} text={text} />
            <div className='btn-container'>
                <div className='btn-row'>
                    <Button symbol='7' handleClick={addToText} />
                    <Button symbol='8' handleClick={addToText} />
                    <Button symbol='9' handleClick={addToText} />
                    <Button symbol='/' color={bgColor} handleClick={addToText} />
                </div>
                <div className='btn-row'>
                    <Button symbol='4' handleClick={addToText} />
                    <Button symbol='5' handleClick={addToText} />
                    <Button symbol='6' handleClick={addToText} />
                    <Button symbol='*' color={bgColor} handleClick={addToText} />
                </div>
                <div className='btn-row'>
                    <Button symbol='1' handleClick={addToText} />
                    <Button symbol='2' handleClick={addToText} />
                    <Button symbol='3' handleClick={addToText} />
                    <Button symbol='+' color={bgColor} handleClick={addToText} />
                </div>
                <div className='btn-row'>
                    <Button symbol='0' handleClick={addToText} />
                    <Button symbol='.' handleClick={addToText} />
                    <Button symbol='=' color='' handleClick={calculateResult}/>
                    <Button symbol='-' color={bgColor} handleClick={addToText} />
                </div>
                <div className='btn-row'>
                    <Button symbol='Clear' wide='76%' color='#dc143c' handleClick={reset} />
                    <Button symbol='%' color={bgColor} handleClick={percentage} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Calculator;
