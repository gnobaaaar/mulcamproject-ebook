import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

function Category(props) {
  const color = 'yellow';
  const {activeItem} = this.state;
  handleItemClick = (e, {name}) => this.setState({activeItem: name});
  return (
      <Menu color={color} widths={3}>
          <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
          />
      </Menu>
  );
}

export default Category;
