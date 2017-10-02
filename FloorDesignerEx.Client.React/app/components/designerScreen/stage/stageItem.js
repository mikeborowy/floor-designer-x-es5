import * as React from 'react';
import $ from 'jquery';

import RoomsCfg from '../common/roomsCfg';

class StageItem extends React.Component {

    constructor(props) {
        super(props)

        this.style = {
            position: 'absolute',
            width: props.w,
            height: props.h
        };

    }

    //shouldComponentUpdate (nextState, nextProps) {
    //    const differentTitle = this.props.title !== nextProps.title;
    //    const differentDone = this.props.done !== nextProps.done
    //    return differentTitle || differentDone;
    //}

    comoponentDidMount() { }

    comoponentWillUnmount() { }

    render() {
        let { id, x, y, r, tox, toy, w, h, sh } = this.props;

        return (
            <div
                className='item-box'
                data-box-id= {id}
                data-box-x= {x}
                data-box-y= {y}
                data-box-r= {r}
                data-box-tox= {tox}
                data-box-toy= {toy}
                data-box-w= {w}
                data-box-h= {h}
                data-box-shape= {sh}
                data-box-selected= {false}
                data-parent='stage'
            >
                <div className='shape-rotate-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-rotate-inv-btn' />
                    <i className='material-icons shape-rotate-inv-icon'>rotate_right</i>
                </div>
                <div className='shape-drag-btn shape-button' data-btn-r={r * (-1)} >
                    <div className='shape-drag-inv-btn' />
                    <i className='material-icons shape-drag-inv-icon'> drag_handle </i>
                </div>
                <div className='shape-delete-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-delete-inv-btn' />
                    <i className='material-icons shape-delete-inv-icon'>delete</i>
                </div>
                <div className='shape-resize-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-resize-inv-btn' />
                    <i className='material-icons shape-resize-inv-icon'>photo_size_select_small</i>
                </div>
            </div>
        )
    }
}

export default StageItem