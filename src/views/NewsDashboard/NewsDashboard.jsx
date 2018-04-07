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
    fetch('https://mashable.com/stories.json?hot_per_page=2&new_per_page=20&rising_per_page=3&channel=tech&new_after&1Dvhfi')
    .then(response => {
      if (response.ok) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error('Failed to load'));
      }
    })
    .then(response => response.json()) // parse response as JSON
    .then(data => {
      this.setState({
        data
      })
    })
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
