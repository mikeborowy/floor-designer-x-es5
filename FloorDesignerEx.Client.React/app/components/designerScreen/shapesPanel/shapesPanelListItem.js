import * as React from 'react';
import $ from 'jquery';
import { TweenLite } from 'gsap';

import RoomsCfg from '../common/roomsCfg';

class ShapesPanelListItem extends React.Component {

    constructor(props) {
        super(props)

        this.debugMode = false;
        this.shape = props.shape;

        this.currentAction = '';
        this.gridCellWidth = RoomsCfg().CELL_WIDTH;
        this.gridCellHeight = RoomsCfg().CELL_HEIGHT;

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
        let btn = $(evt.currentTarget);
        let bar = btn.find('.shape-list-sml-bar');

        TweenLite.to(bar, cfg.animationTime, {
            width: cfg.smlBarWidth,
            backgroundColor: cfg.color
        });

        let primaryContent = btn.find('.mdl-list__item-primary-content');
        TweenLite.to(primaryContent, cfg.animationTime + cfg.primaryContentAnimationDelay, {
            x: cfg.primaryContentX
        });
    };

    onMouseOut(evt) {

        let cfg = this.shapeListBtnConfig.normal;
        let btn = $(evt.currentTarget);
        let bar = btn.find('.shape-list-sml-bar');

        TweenLite.to(bar, cfg.animationTime, {
            width: cfg.smlBarWidth,
            backgroundColor: cfg.color
        });

        let primaryContent = btn.find('.mdl-list__item-primary-content')
        TweenLite.to(primaryContent, cfg.animationTime, {
            x: cfg.primaryContentX
        });
    };

    onMouseDown(evt) {

        var target = $(evt.currentTarget);
        target.bind('dragstart', this.onDragStart.bind(this));
    }

    onDragStart(evt) {

        if (this.debugMode) console.log('onDragStart', evt);

        this.currentAction = 'addItem';

        let target = $(evt.currentTarget);
        let w = target.data('shape-w');
        let h = target.data('shape-h');
        let sh = target.attr('name');
        let parent = target.attr('data-parent');

        $('#stage-grid-live')
            .find('.stage-board-field-highlight')
            .css({
                width: (this.gridCellWidth * w),
                height: (this.gridCellHeight * h)
            });

        this.draggedObj.id = new Date().valueOf();
        this.draggedObj.w = (this.gridCellWidth * w);
        this.draggedObj.h = (this.gridCellHeight * h);
        this.draggedObj.sh = sh

        var evt = new CustomEvent('onDragObject', { detail: this.draggedObj });
        window.dispatchEvent(evt);
    }

    render() {
        return (
            <li className="mdl-list__item mdl-list__item--two-line shape-list-btn drag-element"
                draggable="true"
                name={this.shape.name}
                data-shape-w={this.shape.width}
                data-shape-h={this.shape.height}
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