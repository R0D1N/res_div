import React, {useState} from 'react';

const Res = ({children}) => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeType, setResizeType] = useState(null);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleMouseDown = (event, type) => {
        event.preventDefault();
        setResizeType(type);
        setIsResizing(true);
        setStartX(event.clientX);
        setStartY(event.clientY);
    };

    const handleMouseUp = () => {
        setIsResizing(false);
        setResizeType(null);
    };

    const handleMouseMove = (event) => {
        if (!isResizing) return;
        console.log(isResizing);
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        if (resizeType === "top") {
            setHeight(height - deltaY*2);
        } else if (resizeType === "right") {
            setWidth(width + deltaX*2);
        } else if (resizeType === "bottom") {
            setHeight(height + deltaY*2);
        } else if (resizeType === "left") {
            setWidth(width - deltaX*2);
        } else if (resizeType === "top-left") {
            setWidth(width - deltaX*2);
            setHeight(height - deltaY*2);
        } else if (resizeType === "top-right") {
            setWidth(width + deltaX*2);
            setHeight(height - deltaY*2);
        } else if (resizeType === "bottom-right") {
            setWidth(width + deltaX*2);
            setHeight(height + deltaY*2);
        } else if (resizeType === "bottom-left") {
            setWidth(width - deltaX*2);
            setHeight(height + deltaY*2);
        }
        setStartX(event.clientX);
        setStartY(event.clientY);
    };

    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                border: "1px solid black",
                position: "relative",
            }}
        >
            <div
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
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            />
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    top: "-15px",
                    right: "-15px",
                    cursor: "ne-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "top-right")}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}

            />
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    bottom: "-15px",
                    right: "-15px",
                    cursor: "se-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "bottom-right")}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}

            />
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    bottom: "-15px",
                    left: "-15px",
                    cursor: "sw-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "bottom-left")}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}

            />
            <div
                style={{
                    width: "100%",
                    height: "30px",
                    position: "absolute",
                    top: "-15px",
                    left: "0",
                    cursor: "n-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "top")}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}

            />
            <div
                style={{
                    width: "30px",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    right: "-15px",
                    cursor: "e-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "right")}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}


            />
            <div
                style={{
                    width: "100%",
                    height: "30px",
                    position: "absolute",
                    bottom: "-15px",
                    left: "0",
                    cursor: "s-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "bottom")}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}


            />
            <div
                style={{
                    width: "30px",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "-15px",
                    cursor: "w-resize",
                }}
                onMouseDown={(event) => handleMouseDown(event, "left")}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}


            />
            {isResizing && <div style={{ opacity: 0.2 }} onMouseUp={handleMouseUp} />}
            {children}
        </div>
    );
}

export default Res;
