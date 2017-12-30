 const InitialState = {
    floorList: [
        {
            "id": 1,
            "officeId": 1,
            "name": "Floor 1",
            "width": 12,
            "height": 10,
            "xpos": 0,
            "ypos": 0,
            "image": "../Images/bgnd_12x10.jpg",
            "rooms": [
                {
                    "id": 27,
                    "floorId": 3,
                    "shape": "shape-room-sqr-3x3",
                    "width": 180,
                    "height": 180,
                    "xpos": 0,
                    "ypos": 0,
                    "rotation": 0
                },
                {
                    "id": 28,
                    "floorId": 3,
                    "shape": "shape-room-l-3x2",
                    "width": 180,
                    "height": 180,
                    "xpos": 0,
                    "ypos": 180,
                    "rotation": 90
                }
            ]
        },
        {
            "id": 3,
            "officeId": 1,
            "name": "Floor-2",
            "width": 8,
            "height": 8,
            "xpos": 0,
            "ypos": 0,
            "image": "",
            "rooms": []
        }
    ]
}

 export default InitialState