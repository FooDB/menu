import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Menu.css';
import MenuBar from './MenuBar';
import MenuView from './MenuView';

class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: '',
      loaded: false,
      viewData: false
    };
    this.getViewInfo = this.getViewInfo.bind(this);
  }

  componentDidMount () {
    let path = window.location.pathname;
    path = path.split('/')[2];
    const self = this;
    console.log('this is path: ', path);
    axios.get(`/api/restaurant/${path}`)
      .then((response) => {
        console.log('Client response: ', response.data);
        const menuNames = Object.keys(response.data)
        self.setState({
          data: response.data,
          loaded: true,
          viewData: response.data[menuNames[0]],
        });
      });
  }

  getViewInfo (index, name, type) {
    const { data } = this.state;
    this.setState({
      viewData: data[Object.keys(data)[index]]
    });
  }

  render () {
    const { loaded, data, viewData } = this.state;
    return (
      <div className="page">
        <h1>
          Menu
        </h1>
        <MenuBar getViewInfo={this.getViewInfo} loaded={loaded} data={data} />
        {loaded && <MenuView data={viewData} /> }
      </div>
    );
  }
}

export default Menu;
// ReactDOM.render(<Menu />, document.getElementById('menu'));
