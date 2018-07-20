import React, {Component} from 'react';
import axios from 'axios';
import styles from './Menu.css';

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
		  </div>
		)
	}
}

export default Menu;

