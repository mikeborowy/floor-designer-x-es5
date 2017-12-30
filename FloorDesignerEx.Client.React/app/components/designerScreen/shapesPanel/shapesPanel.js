import * as React from 'react';
import ShapesListCfg from '../../common/shapesCfg';
import ShapesPanelListItem from './shapesPanelListItem';

class ShapesPanel extends React.Component {

    constructor(props) {
        super(props)

        this.shapesList = ShapesListCfg();
    }

    render() {
        return (
            <div id="shapes-panel">
                <div id="shapes-box">
                    <ul id="shapes-list" className="demo-list-two mdl-list ">
                        {
                            this.shapesList.map(function (shapeItem) {
                                return <ShapesPanelListItem
                                    key={shapeItem.id}
                                    shape={shapeItem}
                                />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShapesPanel;