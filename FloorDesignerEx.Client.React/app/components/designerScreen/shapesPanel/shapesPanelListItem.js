import * as React from 'react';
import $ from 'jquery';
import { TweenLite } from 'gsap';

const ShapesPanelListItem = (props) => {

    let { shape } = props;

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

    function onMouseOverFn(evt) {

        let cfg = shapeListBtnConfig.over;
        let btn = $(evt.currentTarget);
        let bar = btn.find('.shape-list-sml-bar');

        TweenLite.to(bar, cfg.animationTime, {
            width: cfg.smlBarWidth,
            backgroundColor: cfg.color
        });

        let primaryContent = btn.find('.mdl-list__item-primary-content')
        TweenLite.to(primaryContent, cfg.animationTime + cfg.primaryContentAnimationDelay, {
            x: cfg.primaryContentX
        });
    };

    function onMouseOutFn(evt) {

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

    return (
        <li className="mdl-list__item mdl-list__item--two-line shape-list-btn drag-element"
            name={shape.name}
            data-shape-w={shape.width}
            data-shape-h={shape.height}
            draggable={shape.isDraggable}
            onMouseOver={onMouseOverFn}
            onMouseOut={onMouseOutFn}
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