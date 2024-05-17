import React, { useState,useRef, useContext, useDebugValue } from "react";
import "./label.css";
import { MyContext,Mycontext2 } from "../pages/context";
import Tooltip from "./tooltip";

function Label(props) {
    const [showTooltip, setShowTooltip] = useState(false);
    const val =useContext(MyContext)
    const style = props.isActive ? { background: "Green" } : { background: "red" };
    const refObj=useRef();

    const handleMouseEnter = (evt) => {

        const width1 = evt.target.getBoundingClientRect().width;
        const width2 = refObj.current.getBoundingClientRect().width;

        refObj.current.style.left = `${-(width2 - width1) / 2}px`;

        setShowTooltip(true);

    }
    useDebugValue("Tooltip value"+showTooltip)

    const handleMouseLeave = () => {

        setShowTooltip(false);
    }
    
    if (val===false){
        return null
    }
    return (
        <div>
            <span
                onClick={() => {
                    props.onAction(props.isActive ? "active" : "non_active");
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="label_items"
                style={style}
            >
                {props.isActive ? "Active" : "Non Active"}
            </span>
            
           <Tooltip ref={refObj} showTooltip={showTooltip} />

        </div>
    );
}

export default Label;
