import { shapesGFX } from '../../../assets/shapes/shapesGFX';

const shapesList = () => {
    return [
        {
            id: '1',
            name: 'shape-room-sqr-2x2',
            image: shapesGFX.sq_2x2,
            width: 2,
            height: 2,
            desc: 'Square Room',
            isDraggable: true
        },
        {
            id: '2',
            name: 'shape-room-sqr-3x3',
            image: shapesGFX.sq_3x3,
            width: 3,
            height: 3,
            desc: 'Square Room',
            isDraggable: true
        },
        {
            id: '3',
            name: 'shape-room-rct-3x2',
            image: shapesGFX.rq_3x2,
            width: 3,
            height: 2,
            desc: 'Rectangle Room',
            isDraggable: true
        },
        {
            id: '4',
            name: 'shape-room-l-3x2',
            image: shapesGFX.ls_3x3,
            width: 3,
            height: 3,
            desc: 'L-Shape Room',
            isDraggable: true
        }
    ]
}

export default shapesList;