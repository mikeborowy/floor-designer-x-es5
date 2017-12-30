import * as React from 'react';
import { TweenLite } from 'gsap';

import RoomsCfg from '../../common/roomsCfg';
import { itemActions } from '../../common/stageItemActions';


class ShapesPanelListItem extends React.Component {

    constructor(props) {
        super(props)

        this.debugMode = false;
        this.shape = props.shape;

        this.currentAction = '';
        this.gridCellWidth = RoomsCfg().CELL_WIDTH;
        this.gridCellHeight = RoomsCfg().CELL_HEIGHT;

        //name = { this.shape.name }
        //data - shape - w={ this.shape.width }
        //data - shape - h={ this.shape.height }

        this.draggedObj = {};

        this.shapeListBtnConfig = {

            normal: {
                smlBarWidth: 5,
                color: 'rgb(68,138,255)',
                primaryContentX: 0,
                animationTime: 0.2
            },
            over: {
                smlBarWidth: 15,
                color: 'rgb(255,235,59)',
                primaryContentX: 20,
                primaryContentAnimationDelay: 0.1,
                animationTime: 0.2
            }
        }
    }

    onMouseOver(evt) {

        let cfg = this.shapeListBtnConfig.over;
        let btn = this.item;
        let bar = btn.childNodes[0];

        TweenLite.to(bar, cfg.animationTime, {
            width: cfg.smlBarWidth,
            backgroundColor: cfg.color
        });

        let primaryContent = btn.childNodes[1];
        TweenLite.to(primaryContent, cfg.animationTime + cfg.primaryContentAnimationDelay, {
            x: cfg.primaryContentX
        });
    };

    onMouseOut(evt) {

        let cfg = this.shapeListBtnConfig.normal;
        let btn = this.item;
        let bar = btn.childNodes[0];

        TweenLite.to(bar, cfg.animationTime, {
            width: cfg.smlBarWidth,
            backgroundColor: cfg.color
        });

        let primaryContent = btn.childNodes[1];
        TweenLite.to(primaryContent, cfg.animationTime, {
            x: cfg.primaryContentX
        });
    };

    onMouseDown(evt) {
    
        let { shape } = this.props;
        let stageBoardHighlight = document.querySelectorAll('.stage-board-field-highlight');

        TweenLite.set(stageBoardHighlight, {
            width: this.gridCellWidth * shape.width,
            height: this.gridCellHeight * shape.height
        })
    }

    onDragStart(evt) {

        this.currentAction = 'addItem';

        let { shape } = this.props;

        this.draggedObj.id = new Date().valueOf();
        this.draggedObj.w = this.gridCellWidth * shape.width;
        this.draggedObj.h = this.gridCellHeight * shape.height;
        this.draggedObj.sh = shape.name;
        this.draggedObj.actions = itemActions.CREATED;

        var evt = new CustomEvent('onDragObject', { detail: this.draggedObj });
        window.dispatchEvent(evt);
    }

    render() {
        return (
            <li ref={div => { this.item = div}}
                className="mdl-list__item mdl-list__item--two-line shape-list-btn drag-element"
                draggable="true"
                onDrag={this.onDragStart.bind(this)}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}
                onMouseDown={this.onMouseDown.bind(this)}
            >
                <div className="shape-list-sml-bar"></div>
                <div className="mdl-list__item-primary-content">
                    <img className="shape-list-img-sml" src={this.shape.image} />
                    <span className="mdl-list__item-sub-title shape-list-size">Size {this.shape.width}x{this.shape.height}</span>
                    <span className="shape-list-title">{this.shape.desc}</span>
                </div>
            </li>
        )
    }
}

export default ShapesPanelListItem;