import React from "react";
import "./addNew.css";
class addNew extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            inputVal:""
        }
    }

    handlechange=(evt)=>{
          const value=evt.target.value;

          this.setState({
            inputVal:value
          });
    }

    handleClick=()=>{
        console.log(this.state.inputVal)
    }
    render(){
        return (
            <div className="add_new">
                <input value={this.state.inputVal} onChange={this.handlechange}/>
                <button onClick={this.handleClick}>Click</button>
                <br />

                <button onClick={this.props.pageRefresh} className="refresh">Refresh</button>
            </div>
        );

    }
}

export default addNew;