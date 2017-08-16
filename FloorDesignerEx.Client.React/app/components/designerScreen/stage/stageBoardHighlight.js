import * as React from 'react';

const StageBoardHighlight = ({ id, width, height, top, left }) => {

    let divStyle = {
        position: 'absolute',
        top: top,
        left: left,
        width: width,
        height: height
    };

    return (
        <div id={id} className="stage-board-field-highlight" style={divStyle}>
        </div>
    );
}

export default StageBoardHighlight;