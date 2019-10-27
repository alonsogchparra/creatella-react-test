import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

  state = {
    icons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then(res => {
        console.log('Fetching_data', res.data);
        this.setState({
          icons: res.data
        })
      });
  }


  render () {
    return (
      <div>
        <ul>
        {this.state.icons.map(icon => <li key={icon.id}>{icon.face}</li> )}
        </ul>
      </div>
    )
  }
}

export default Dashboard