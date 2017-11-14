import * as React from 'react';

const StageBoard = ({ id, width, height, top, left }) => {

    let divStyle = {
        position: 'absolute',
        border: '1px dashed rgba(0, 0, 0, 0.1)',
        top: top,
        left: left,
        width: width,
        height: height
    };

    return (
        <div id={id} className="stage-board-field" style={divStyle}>
        </div>  
    );
}

export default StageBoard;