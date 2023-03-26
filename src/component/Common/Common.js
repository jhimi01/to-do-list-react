import React from 'react';

const Common = (props) => {
    
    return (
       <div style={{display:'flex'}}>
         <button onClick={() => {
            props.onSelect(props.id)
         }}>Close</button>
        <li>{props.text}</li>
       </div>
    );
};

export default Common;