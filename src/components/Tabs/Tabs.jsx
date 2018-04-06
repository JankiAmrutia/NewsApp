import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
    constructor(props){
        super(props);
    }

    openCity = (data) => {
        this.props.changedTab(data);
    }

    render(){
        console.log(this.props.options);
        return (
            <div className="tab">

            {
                this.props.options
                .map((item, index) => 
                    <button className="tablinks" onClick={ () => this.openCity(item)} key={index}>{item}</button>
                )
            }
            </div>
      )
    }
}

export default Tabs;