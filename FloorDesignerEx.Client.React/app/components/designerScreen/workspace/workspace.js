import * as React from 'react';
import $ from 'jquery';

import ShapesPanel from '../shapesPanel/shapesPanel';
import Stage from '../stage/stage';

class Workspace extends React.Component {

    constructor(props) {
        super(props)
    }

    updateDimensions() {

        let toolbarHeight = $("#designer-toolbar").height();
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        $("#shapes-panel").height(
            windowHeight - toolbarHeight
        )
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <div id="designer-workspace">
                <ShapesPanel />
                <Stage />
            </div>
        )
    }
}

Workspace.displayName = "Workspace";

export default Workspace;