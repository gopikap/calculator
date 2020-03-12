import React, { useState } from 'react';
import { Result } from '../Result';
import { KeyPad } from '../KeyPad';
/* eslint no-eval: 0 */
export const Calculator = () => {
    const [equations, setEquations]   = useState('');
    const [result, setResult]         = useState('');

    const onClick = (key) => {
        const isNumberDecimal   = (key >= '0' && key <= '9') || key === '.';
        const isComputations    = (['+', '-', '*', '/', '%']).includes(key);
        const isEqual           = (key === '=');
        const isClear           = (key === 'C');
        const isRemove          = (key === '<-')
        let equation            = equations;
        
        switch (true) {
            case (isNumberDecimal):
                equation += key;
                break;
            case (isComputations):
                equation += ' ' + key + ' ';
                break;
            case (isEqual):
                let result = eval(equation);
                result = Number.isInteger(result) ? result : result.toFixed(2);
                setResult(result);                 
                break;
            case (isClear):
                equation = '';
                setResult('');
                break;
            case (isRemove):
                equation = equation.trim();
                equation = equation.substr(0, equation.length - 1);               
                break;
            default: 
                equation = '';
                break;
        }
        setEquations(equation);
    }

    return (
        <div id="container">
            <Result equations={equations} result={result} />
            <KeyPad onClick={onClick} />
        </div>
    )
}