import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import data from '../../data/data.json';
import Tabs from '../../components/Tabs/Tabs';

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

  changedTab = (data) => {
    this.setState({
      selectedTab: data
    })
    console.log('lisss', data);
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
