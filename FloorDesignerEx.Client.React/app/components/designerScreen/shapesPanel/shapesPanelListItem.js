import * as React from 'react';

const ShapesPanelItem = (props) => {

    let { shape } = props;

    return (
        <li class="mdl-list__item mdl-list__item--two-line shape-list-btn drag-element"
            name={shape.name}
            data-shape-w={shape.width}
            data-shape-h={shape.height}
            draggable={shape.isDraggable} >
            <div class="shape-list-sml-bar"></div>
            <div class="mdl-list__item-primary-content">
                <img class="shape-list-img-sml" src={shape.image} />
                <span class="mdl-list__item-sub-title shape-list-size">Size {shape.width}x{shape.height}</span>
                <span class="shape-list-title">{shape.desc}</span>
            </div>
        </li>
    )
}

export default ShapesPanelItem;