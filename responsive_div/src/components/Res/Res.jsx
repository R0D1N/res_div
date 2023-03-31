import React, {useState, useEffect,useCallback, useRef } from 'react';
const Res = ({children, Pheight, Pwidth}) => {
    const useResize = useRef(null);
    const [width, setWidth] = useState(Pwidth);
    const [height, setHeight] = useState(Pheight);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeType, setResizeType] = useState(null);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleMouseUp = useCallback( () => {
        setIsResizing(false);
        useResize.current.style.width = "30px";
        useResize.current.style.height = "30px";
        useResize.current.style.top = "0px";
        useResize.current.style.left = "0px";
        setResizeType(null);
    }, [])

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        return () => document.removeEventListener('mouseup', handleMouseUp);
    }, []);

    const handleMouseDown = useCallback((event, type) => {
        useResize.current.style.width = "2000px";
        useResize.current.style.height = "2000px";
        let top = "-1000px"
        let left = "-1000px"

        switch (type) {
            case "top":
                useResize.current.style.top = top;
                useResize.current.style.left = left;
                break;
            case "right":
                useResize.current.style.left = left;
                break;
            case "bottom":
                useResize.current.style.top = top;
                break;
            case "left":
                useResize.current.style.left = left;
                break;
            case "top-left":
                useResize.current.style.top = top;
                useResize.current.style.left = left;
                break;
            case "top-right":
                useResize.current.style.top = top;
                break;
            case "bottom-right":
                break;
            case "bottom-left":
                useResize.current.style.left = left;
                break;
            default:
                break;
        }

        setResizeType(type);
        setIsResizing(true);
        setStartX(event.clientX);
        setStartY(event.clientY);
    },[]);

    const handleMouseMove = (event) => {
        if (!isResizing) return;
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        const minWidth = 125;
        const minHeight = 125;

        if(width >= minWidth && height >= minHeight){
            switch (resizeType) {
                case "top":
                    setHeight(height - deltaY);
                    setTop(top + deltaY/2);
                    break;
                case "right":
                    setWidth(width + deltaX);
                    setLeft(left + deltaX/2)
                    break;
                case "bottom":
                    setHeight(height + deltaY);
                    setTop(top + deltaY/2);
                    break;
                case "left":
                    setWidth(width - deltaX);
                    setLeft (left + deltaX/2);
                    break;
                case "top-left":
                    setWidth(width - deltaX);
                    setHeight(height - deltaY);
                    setTop(top + deltaY/2);
                    setLeft (left + deltaX/2);
                    break;
                case "top-right":
                    setWidth(width + deltaX);
                    setHeight(height - deltaY);
                    setTop(top + deltaY/2);
                    setLeft(left + deltaX/2)
                    break;
                case "bottom-right":
                    setWidth(width + deltaX);
                    setHeight(height + deltaY);
                    setTop(top + deltaY/2);
                    setLeft(left + deltaX/2)
                    break;
                case "bottom-left":
                    setWidth(width - deltaX);
                    setHeight(height + deltaY);
                    setTop(top + deltaY/2);
                    setLeft (left + deltaX/2);
                    break;
                default:
                    break;
            }
            setStartX(event.clientX);
            setStartY(event.clientY);
        }else if(width > minWidth){
            setHeight(125);
        }else if(height > minHeight){
            setWidth(125);
            }
        else{
            setWidth(125);
            setHeight(125);
        }
    };

    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                top: `${top}px`,
                left: `${left}px`,
                border: "1px solid black",
                position: "relative",
            }}
        >
            <div  id={"top_right"}
                style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    top: "-15px",
                    right: "-15px",
                    cursor: "nesw-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "top-right")}
                onMouseMove={handleMouseMove}
            />
            <div  id={"bottom_right"}
                style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    bottom: "-15px",
                    right: "-15px",
                    cursor: "nwse-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "bottom-right")}
                onMouseMove={handleMouseMove}
            />
            <div id={"bottom_left"}
                style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    bottom: "-15px",
                    left: "-15px",
                    cursor: "nesw-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "bottom-left")}
                onMouseMove={handleMouseMove}
            />
            <div id={"top"}
                style={{
                    width: "90%",
                    height: "30px",
                    position: "absolute",
                    top: "-15px",
                    left: "5%",
                    cursor: "n-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "top")}
                onMouseMove={handleMouseMove}
            />
            <div id={"right"}
                style={{
                    width: "30px",
                    height: "90%",
                    position: "absolute",
                    top: "5%",
                    right: "-15px",
                    cursor: "e-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "right")}
                onMouseMove={handleMouseMove}
            />
            <div  id={"bottom"}
                style={{
                    width: "90%",
                    height: "30px",
                    position: "absolute",
                    bottom: "-15px",
                    left: "5%",
                    cursor: "s-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "bottom")}
                onMouseMove={handleMouseMove}
            />
            <div  id={"left"}
                style={{
                    width: "30px",
                    height: "90%",
                    position: "absolute",
                    top: "5%",
                    left: "-15px",
                    cursor: "w-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "left")}
                onMouseMove={handleMouseMove}
            />
            <div id={"top_left"} ref={useResize}
                 style={{
                     width: "30px",
                     height: "30px",
                     position: "absolute",
                     top: "-15px",
                     left: "-15px",
                     cursor: "nwse-resize",
                 }}
                 onMouseDown={(event) => handleMouseDown(event, "top-left")}
                 onMouseMove={handleMouseMove}
            />
            {children}
        </div>
    );
}

export default Res;
