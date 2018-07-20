import React, {Component} from 'react';
import axios from 'axios';
import styles from './Menu.css';
import MenuBar from './MenuBar.jsx';
import Table from './Table.jsx';

class Menu extends Component {
	constructor(props) {
		super(props)
	    this.state = {
          data: []
	    };

	}

	componentDidMount() {
      axios.get('/menus')
        .then(function(response) {
        	console.log('Axios resp', response.data)
        })
	}

	render() {
		return(
		  <div className='page'>
		    <h1>Menu</h1>
		    <MenuBar />
		    <Table />
		    <Table />
		  </div>
		)
	}
}

export default Menu;

