import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    console.log('props are:' + props.score);

    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color='dark' light expand='md'>
          <NavbarBrand className='text-white ml-5'>
            <h1> Clicky Game</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='navbar'>
              <NavItem>
                <h5 className='text-warning  mr-3'>Status</h5>
              </NavItem>
              <NavItem className='ml-auto'>
                <h3 className='text-white  mr-3'>&nbsp;&nbsp;&nbsp;Score</h3>
              </NavItem>
              <NavItem>
                <h3 className='text-white'>&nbsp;&nbsp;&nbsp;Top Score</h3>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
