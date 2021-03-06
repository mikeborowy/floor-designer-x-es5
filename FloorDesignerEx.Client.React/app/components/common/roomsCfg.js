﻿import { shapesGFX } from '../../assets/shapes/shapesGFX';

const config = () => {

    let roomsCfg = {}
    roomsCfg.COLOR_WHITE_01 = "white"
    roomsCfg.COLOR_BLUE_01 = "blue"
    roomsCfg.CELL_WIDTH = 60;
    roomsCfg.CELL_HEIGHT = 60;
    roomsCfg.SHAPE_CFG = {
        PADDING_LEFT: 0,
        PADDING_TOP: 0,
        BORDER_SIZE: 3
    };
    roomsCfg.SHAPES_SIZES = [
        {
            "shape-room-sqr-2x2":
            {
                w: 2,
                h: 2,
                t: {
                    x: roomsCfg.CELL_WIDTH,
                    y: roomsCfg.CELL_HEIGHT
                },
                thumb: shapesGFX.sq_2x2
            }
        },
        {
            "shape-room-sqr-3x3":
            {
                w: 3,
                h: 3,
                t: {
                    x: (2 * roomsCfg.CELL_WIDTH) - (roomsCfg.CELL_WIDTH * 0.5),
                    y: (2 * roomsCfg.CELL_HEIGHT) - (roomsCfg.CELL_HEIGHT * 0.5)
                },
                thumb: shapesGFX.sq_3x3
            }
        },
        {
            "shape-room-rct-3x2":
            {
                w: 3,
                h: 2,
                t: {
                    x: (3 * roomsCfg.CELL_WIDTH) - (roomsCfg.CELL_WIDTH * 0.5),
                    y: (2 * roomsCfg.CELL_HEIGHT) - (roomsCfg.CELL_HEIGHT * 0.5)
                },
                thumb: shapesGFX.rq_3x2
            }
        },
        {
            "shape-room-l-3x2":
            {
                w: 3,
                h: 3,
                t: {
                    x: (3 * roomsCfg.CELL_WIDTH) - (roomsCfg.CELL_WIDTH * 0.5),
                    y: (2 * roomsCfg.CELL_HEIGHT) - (roomsCfg.CELL_HEIGHT * 0.5)
                },
                thumb: shapesGFX.ls_3x3
            }
        }
    ];

    return (roomsCfg)
}

export default config;