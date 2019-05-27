import React from "react";
import "./comp.css";

class CompTest extends React.Component{
    constructor(){
        super();
        this.name= "Hanako"
    }
    render(){
        console.log(this.props);
        return(
            <div className="text-header">Hello {this.name}!</div>
        );
    }
}

export default CompTest;