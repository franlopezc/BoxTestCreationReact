import React from 'react';

const validationComponent =(props) =>{
    let textResult = 'Text too long';
    if(props.tamanyo<=5){
        textResult='Text too short'
    }
    
    return(
        <div>
            <p>{textResult}</p>
        </div>
    );
}




export default validationComponent;
