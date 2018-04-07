import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
    constructor(props){
        super(props);
    }
    loadData = (data) => {
        this.props.changedTab(data);
    }

    render(){
        console.log(this.props.options);
        return (
            <div className="tab">
            {
                this.props.options
                .map((item, index) => 
                    <button className="tablinks" onClick={ () => this.loadData(item)} key={index}>{item.toUpperCase()}</button>
                )
            }
            </div>
      )
    }
}

export default Tabs;