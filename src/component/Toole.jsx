import React from "react";
import "./toole.css";
import Addnew from "./addNew.jsx"
class Toole extends React.Component{

    render(){

        const{
            children,
            onAction,
            lebalValue,
            count,
            pageRefresh
        }=this.props;
   
        // const onlyone=React.Children.only(children)
        // const count=React.Children.count(onlyone.props.children)

        return (
            <div className="list_toole">
                <div className="list_header">
                    <select value={lebalValue} onChange={onAction} name="status" id="">
                        <option value="All">All</option>
                        <option value="active">Active</option>
                        <option value="non_active">Non Active</option>
                    </select>

                    <Addnew pageRefresh={pageRefresh} />
                </div>
               
                {children}
                <div className="list_Footer">
                    Total {count} items.

                </div>


            </div>
        );
    }

}

export default Toole