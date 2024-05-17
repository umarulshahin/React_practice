import React from "react";

class Dummy extends React.Component{

    componentDidMount(){
        console.log("componentDidMount" ,this.props.name)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount",this.props.name)
    }

    componentDidUpdate(){
        console.log("componenDidUpdate")
    }
    render(){

        return (
             <div>
            {this.props.name}
            </div>
            )
    }
}
export default Dummy