import React from 'react';

const Title = ({text}) => {
    return (  
    <div className="title-container">
        <div className="vertical-line"></div>
        <h2 className='title'>{text}</h2>
      </div>
    );
}
 
export default Title;