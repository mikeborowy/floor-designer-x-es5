import * as React from 'react';
import ShapesPanel from './shapesPanel';
import Stage from './stage';

const Workspace = () => {

    return (
        <div id="designer-workspace">
            <ShapesPanel />
            <Stage />
        </div>
    )
}

Workspace.displayName = "Workspace";

export default Workspace;