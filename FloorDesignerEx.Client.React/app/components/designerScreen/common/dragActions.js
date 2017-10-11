export default DragActions = () => {

    let dragActions = {}
    dragActions.NONE = "none";
    dragActions.SELECTED = "selected";
    dragActions.UNSELECTED = "unselected";
    dragActions.CREATED = "created";
    dragActions.DRAG = "drag";
    dragActions.RESIZE = "resize";
    dragActions.ROTATE = "rotate";
    dragActions.DELETE = "delete";

    return (dragActions)
}