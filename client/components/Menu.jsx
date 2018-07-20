import React, {Component} from 'react';
import axios from 'axios';

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
		  <h1>Main Menu Component!</h1>
		)
	}
}

export default Menu;

