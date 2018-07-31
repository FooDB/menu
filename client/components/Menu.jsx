import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './Menu.css';
import MenuBar from './MenuBar.jsx';
import MenuView from './MenuView.jsx';


class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: '',
      loaded: false,
      viewData: false
    }
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
        }, () => {
          console.log(this.state.data);
        });
      });
  }

  getViewInfo (index, name, type) {
    console.log('you clicked me')
    this.setState({
      viewData: this.state.data[type][index].menu
    }, () => console.log('new data', this.state.viewData));
  }

  render () {
    return (
        <div className="page">
          <h1> Menu </h1>
          <MenuBar getViewInfo={this.getViewInfo} loaded={this.state.loaded} data={this.state.data} />
          {this.state.loaded && <MenuView data={this.state.viewData} /> }
        </div>
    );
  }
}

export default Menu;
ReactDOM.render(<Menu />, document.getElementById('menu'));

