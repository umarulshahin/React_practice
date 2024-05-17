
import React from "react";
import "./label.css";
import { MyContext,Mycontext2 } from "../pages/context";


class Label2 extends React.Component{
    render(){
        const props=this.props;
        const style = props.isActive ? { background: "Green" } : { background: "red" };
        return(
            <Mycontext2.Consumer>
                {(val2)=>{
                    return(
                        <MyContext.Consumer>{(val)=>{
                            console.log(val2)
                            if(val===false){
                                return null
                            }
                            return (
                                
                                <span
                                    onClick={() => {
                                        props.onAction(props.isActive ? "active" : "non_active");
                                    }}
                                
                                    className="label_items"
                                    style={style}
                                >
                                    {props.isActive ? "Active" : "Non Active"}
                                </span>
                            );
                        }}</MyContext.Consumer>
                    )

                }}
           
            </Mycontext2.Consumer>
                
        )
           
     
        
    }

};
export default Label2;