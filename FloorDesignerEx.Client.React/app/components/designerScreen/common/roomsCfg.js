const roomsCfg = () => {

    let CELL_WIDTH = 60;
    let CELL_HEIGHT = 60;
    let SHAPE_CFG = {
        PADDING_LEFT: 0,
        PADDING_TOP: 0,
        BORDER_SIZE: 3
    };
    let SHAPES_SIZES = [
        {
            "shape-room-sqr-2x2":
            {
                w: 2,
                h: 2,
                t: {
                    x: CELL_WIDTH,
                    y: CELL_HEIGHT
                }
            }
        },
        {
            "shape-room-sqr-3x3":
            {
                w: 3,
                h: 3,
                t: {
                    x: (2 * CELL_WIDTH) - (CELL_WIDTH * 0.5),
                    y: (2 * CELL_HEIGHT) - (CELL_HEIGHT * 0.5)
                }
            }
        },
        {
            "shape-room-rct-3x2":
            {
                w: 3,
                h: 2,
                t: {
                    x: (3 * CELL_WIDTH) - (CELL_WIDTH * 0.5),
                    y: (2 * CELL_HEIGHT) - (CELL_HEIGHT * 0.5)
                }
            }
        },
        {
            "shape-room-l-3x2":
            {
                w: 3,
                h: 3,
                t: {
                    x: (3 * CELL_WIDTH) - (CELL_WIDTH * 0.5),
                    y: (2 * CELL_HEIGHT) - (CELL_HEIGHT * 0.5)
                }
            }
        }
    ];

    return ({
        CELL_WIDTH,
        CELL_HEIGHT,
        SHAPE_CFG,
        SHAPES_SIZES
    })


}

export default roomsCfg;