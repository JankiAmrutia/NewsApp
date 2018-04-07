import React, { Component } from 'react';
import './Tabs.css';

//Component to display tabs
class Tabs extends Component {
    loadData = (data) => {
        this.props.changedTab(data);
    }

    render(){
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