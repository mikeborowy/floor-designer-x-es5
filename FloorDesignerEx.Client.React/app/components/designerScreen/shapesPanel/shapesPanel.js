import * as React from 'react';
import ShapesListCfg from './shapesCfg';
import ShapesPanelListItem from './shapesPanelListItem';

const ShapesPanel = (props) => {

    let shapesList = ShapesListCfg()

    return (
        <div id="shapes-panel">
            <div id="shapes-box">
                <ul id="shapes-list" className="demo-list-two mdl-list ">
                    {shapesList.map(function (shapeItem) {
                        return <ShapesPanelListItem key={shapeItem.id} shape={shapeItem} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ShapesPanel;