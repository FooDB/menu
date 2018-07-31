import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Menu.css';
import MenuBar from './MenuBar.jsx';
import MenuView from './MenuView.jsx';

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
    const self = this;
    axios.get('/menus')
      .then((response) => {
        self.setState({
          data: response.data[5],
          loaded: true,
          viewData: response.data[5].foodMenu[0].menu
        });
      });
  }

  getViewInfo (index, name, type) {
    const { data } = this.state;
    this.setState({
      viewData: data[type][index].menu
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
ReactDOM.render(<Menu />, document.getElementById('menu'));
