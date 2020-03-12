import React from 'react';
import { calculatorKeys } from '../../_util/calculatorKeys';
import { Button } from '../../shared/Button';

export const KeyPad = (props) => { 
    let classNames = ['eachRow'];
    return (
        <div id='keys-container'>
            { calculatorKeys.map(((calculatorKey, index) => {
                    const { key }   = calculatorKey;
                    if (key === '0') classNames.push('zero');
                    return(
                        <div className={classNames.join(' ')} key={index}>
                            <Button 
                                text    = {key}
                                onClick = {() => props.onClick(key)}
                            />
                        </div>
                    )
                }
            )) }
        </div>        
    )
}