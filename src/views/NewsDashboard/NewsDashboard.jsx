import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import data from '../../data/data.json';
import Tabs from '../../components/Tabs/Tabs';
import axios from 'axios';

const OPTIONS = [
  'new',
  'rising',
  'hot'
];
// Stateful Component to display the list of albums
class NewsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'new'
    }
  }

  componentDidMount(){
    let url = 'https://mashable.com/stories.json'
    return axios(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'
        // ,
      }
      // ,
      // withCredentials: true,
      // credentials: 'same-origin',
    }).then(response => {
      console.log(response)
    })
   
    // fetch('https://mashable.com/stories.json',{mode: 'cors'})
    //   .then(response => {
    //     if (response.ok) {
    //       return Promise.resolve(response);
    //     } else {
    //       return Promise.reject(new Error('Failed to load'));
    //     }
    //   })
    //   .then(response => response.json()) // parse response as JSON
    //   .then(data => {
    //     let finalData = this.formatData(data);
    //     this.setState({
    //       data: finalData.feed
    //     })
    //   })
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
          {(data && data[this.state.selectedTab]) ?
          (  data[this.state.selectedTab]
            .map((show, index) => <Card key={show._id} {...show} />)) : ''}
        </div>
      </div>
    );
  }
}

export default NewsDashboard;
