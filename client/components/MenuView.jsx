import React, { Component } from 'react';
import styles from './MenuView.css'
import Table from './Table.jsx';

class MenuView extends Component {
  constructor (props) {
 	super(props);
  }

  render () {
    return (
	  <div>
	    {this.props.data && this.props.data.map(menu =>
	 	  <div className="wrapper">
		    <Table data={menu.items.slice(0, (Math.floor(menu.items.length) / 2) )} />
		    <Table data={menu.items.slice((Math.floor(menu.items.length) / 2) )} />
	 	  	<br />
	 	  	<br />
	 	  </div>
	 	)}
	  </div>
      )
	}
}

export default MenuView;