import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './Menu.css';
import MenuBar from './MenuBar.jsx';
import Table from './Table.jsx';


class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: '',
      loaded: false
    }
  }

  componentDidMount () {
    const self = this;
    axios.get('/menus')
      .then((response) => {
        self.setState({
          data: response.data[5],
          loaded: true
        }, () => {
          console.log(this.state.data);
        });
      });
  }

  render () {
    return (
        <div className="page">
          <h1> Menu </h1>
          <MenuBar loaded={this.state.loaded} data={this.state.data} />
          {this.state.loaded && <Table loaded={this.state.loaded} menu={this.state.data.foodMenu}/> }
          {this.state.loaded && <Table loaded={this.state.loaded} menu={this.state.data.foodMenu}/> }
        </div>
    );
  }
}

export default Menu;
ReactDOM.render(<Menu />, document.getElementById('menu'));

