import React, { Component } from 'react';
import './MenuView.css';
import Table from './Table.jsx';
import Modal from './Modal.jsx';

class MenuView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded: false,
      show: true
    };
    this.expanded = this.expanded.bind(this);
    this.getMore = this.getMore.bind(this);
  }

  getMore () {
    if (this.state.expanded) {
      return (
        <div className={`hide-${this.state.expanded}`}>
          {this.props.data && this.props.data.map((menu, i) => {
            if (i === 0) {
              return (
                <div className="wrapper">
                  {menu.items.length % 2 === 0 && (
                    <div>
                      <Table data={menu.items.slice(4, 4 + (Math.floor(menu.items.length / 4)))} />
                      <Table data={menu.items.slice(4 + (Math.floor(menu.items.length / 4)))} />
                      <br />
                      <br />
                    </div>)}
                  {menu.items.length % 2 !== 0 && (
                    <div>
                      <Table data={menu.items.slice(4, 4 + (Math.ceil(menu.items.length / 4)))} />
                      <Table data={menu.items.slice(4 + (Math.ceil(menu.items.length / 4)))} />
                      <br />
                      <br />
                    </div>)}
                </div>
              );
            } else if (i !== 0) {
              return (
                <div className="wrapper">
                  <hr />
                  {menu.info && (
                    <div>
                      <h5>{menu.info.title}</h5>
                      <p>{menu.info.description}</p>
                    </div>)}
                  {menu.title && <h5>{menu.title}</h5>}
                  <br />
                  <Table info={menu.info} data={menu.items.slice(0, (Math.floor(menu.items.length) / 2))} />
                  <Table data={menu.items.slice((Math.floor(menu.items.length) / 2))} />
                </div>
              );
            }
          })}
        </div>
      );
    } else {
      return null;
    }
  }

  expanded () {
    this.setState({
      expanded: !this.state.expanded,
      show: !this.state.show
    });
  }

  render () {
    return (
      <div>
        <div>
          {this.props.data && (
            <div className="topMenu">
              {this.props.data[0].info && (
                <div>
                  <h5>{this.props.data[0].info.title}</h5>
                  <p>{this.props.data[0].info.description}</p>
                </div>)}
              {this.props.data[0].title && <h5>{this.props.data[0].title}</h5>}
              <br />
              <Table info={this.props.data[0].info} data={this.props.data[0].items.slice(0, 2)} />
              <Table data={this.props.data[0].items.slice(2, 4)} />
            </div>)}
        </div>
        <div>
          {this.state.expanded && this.getMore()}
        </div>
        <div>
          <Modal menuText={this.state.show} handleClose={this.expanded} />
        </div>
      </div>
    );
  }
}

export default MenuView;
