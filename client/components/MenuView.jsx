import React, { Component } from 'react';
import './MenuView.css';
import Table from './Table';
import Modal from './Modal';

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
    const { expanded } = this.state;
    const { data } = this.props;
    if (expanded) {
      return (
        <div className={`hide-${expanded}`}>
          {data && data.map((menu, i) => {
            if (i === 0) {
              return (
                <div key={i} className="wrapper">
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
    const { expanded, show } = this.state;
    this.setState({
      expanded: !expanded,
      show: !show
    });
  }

  render () {
    const { expanded, show } = this.state;
    const { data } = this.props;
    console.log('MewView Data', data);
    return (
      <div>
        <div>
          {data && (
            <div className="topMenu">
              {data[0].info && (
                <div>
                  <h5>{data[0].info.title}</h5>
                  <p>{data[0].info.description}</p>
                </div>)}
              {data[0].title && <h5>{data[0].title}</h5>}
              <br />
              <Table info={data[0].info} data={data[0].items.slice(0, 2)} />
              <Table data={data[0].items.slice(2, 4)} />
            </div>)}
        </div>
        <div>
          {expanded && this.getMore()}
        </div>
        <div>
          <Modal menuText={show} handleClose={this.expanded} />
        </div>
      </div>
    );
  }
}

export default MenuView;
