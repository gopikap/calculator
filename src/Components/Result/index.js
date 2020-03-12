import React from 'react';

export const Result = (props) => {
    const { equations, result} = props;
    return(
        <div id="result-container">
            <p id='results'>{result}</p>
            <p id='equations'>{equations}</p>
        </div>
    )
}