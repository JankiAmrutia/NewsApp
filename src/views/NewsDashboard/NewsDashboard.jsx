/* global $ */

import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs/Tabs';
const OPTIONS = [
  'new',
  'rising',
  'hot'
];

// Stateful Component to display the list of news albums
class NewsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'new'
    }
  }

  componentDidMount(){
    $.get({
      // The URL for the request
      url: "https://mashable.com/stories.json",
      // The data to send (will be converted to a query string)
      data: {
        hot_per_page:'2',
        new_per_page:'20',
        rising_per_page:'3',
        channel:'tech',
        new_after:'1Dvhfi'
      },
      type: "GET",
      dataType : "json",
  })
    // Code to run if the request succeeds;
    // The response is passed to the function
    .done(( response ) => {
       return response;
    })
    .done(data=>{
      this.setState({
        data
      })
    })
    // Code to run if the request fails
    // status codes are passed to the function
    .fail(function( xhr, status, errorThrown ) {
     // alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
    })
    .always(function( xhr, status ) {
      console.log("complete");
    });
  }

  changedTab = (data) => {
    this.setState({
      selectedTab: data
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Tabs options = {OPTIONS} changedTab={this.changedTab}/>
        <div>
          {(this.state.data && this.state.data[this.state.selectedTab]) ?
          (  this.state.data[this.state.selectedTab]
            .map((show, index) => <Card key={show._id} {...show} />)) : ''}
        </div>
      </div>
    );
  }
}

export default NewsDashboard;
