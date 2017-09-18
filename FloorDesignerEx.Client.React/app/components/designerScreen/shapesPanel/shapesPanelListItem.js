import * as React from 'react';
import $ from 'jquery';
import { TweenLite } from 'gsap';
import RoomsCfg from '../common/roomsCfg';

const ShapesPanelListItem = (props) => {

    let { shape } = props;

    let debugMode = true;
    let currentAction = '';
    let gridCellWidth = RoomsCfg().CELL_WIDTH;
    let gridCellHeight = RoomsCfg().CELL_HEIGHT;
    let draggedObj = null;

    const shapeListBtnConfig = {

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

    function onMouseOver(evt) {

        let cfg = shapeListBtnConfig.over;
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

    function onMouseOut(evt) {

        let cfg = shapeListBtnConfig.normal;
        let btn = $(evt.currentTarget);
        let bar = btn.find('.shape-list-sml-bar');

        TweenLite.to(bar, cfg.animationTime, {
            width: cfg.smlBarWidth,
            backgroundColor: cfg.color
        });

        var primaryContent = btn.find('.mdl-list__item-primary-content')
        TweenLite.to(primaryContent, cfg.animationTime, {
            x: cfg.primaryContentX
        });
    };

    function OnDragStart(evt) {

        currentAction = 'addItem';

        var target = $(evt.target);
        var w = target.data('shape-w');
        var h = target.data('shape-h');
        var sh = target.attr('name');
        var parent = target.attr('data-parent');

        $('#stage-grid-live')
            .find('.stage-board-field-highlight')
            .css({
                width: (gridCellWidth * w),
                height: (gridCellHeight * h)
            });

        var newId = getCurrentId() + 1;

        draggedObj = null;
        draggedObj = {
            id: newId,
            x: 0,
            y: 0,
            w: (gridCellWidth * w),
            h: (gridCellHeight * h),
            sh: sh
        };

        console.log('OnDragStart', draggedObj)
    }

    function getCurrentId() {

        var _a = 0;

        $.each($('.item-box'), function (i, val) {

            _a = $($('.item-box')[i]).data('box-id');
        });

        return _a;
    }

    return (
        <li className="mdl-list__item mdl-list__item--two-line shape-list-btn drag-element"
            name={shape.name}
            data-shape-w={shape.width}
            data-shape-h={shape.height}
            draggable={shape.isDraggable}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onDragStart={OnDragStart}
            >
            <div className="shape-list-sml-bar"></div>
            <div className="mdl-list__item-primary-content">
                <img className="shape-list-img-sml" src={shape.image} />
                <span className="mdl-list__item-sub-title shape-list-size">Size {shape.width}x{shape.height}</span>
                <span className="shape-list-title">{shape.desc}</span>
            </div>
        </li>
    )
}

export default ShapesPanelListItem;