import React, { Component } from 'react';
// import './index.css';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class Example extends Component {
  render() {
    return (
      <div>
        <Navbar className='navigation' color='dark' light expand='md' href='#'>
          <NavbarBrand className='mx-auto text-center text-white ml-5'>
            <h1>Memory Game</h1>
            <em>The Presidential Edition</em>
            <p>How many can you remember?</p>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
