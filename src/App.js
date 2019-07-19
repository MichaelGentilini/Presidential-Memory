import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Button from './Button.js';
import presidentData from './presidentImages.js';
import { Row, Col, Container } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      guessed: [],
      id: '',
    };
  }

  whatId = id => {};

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    const presImages = presidentData.map(image => (
      <Button key={image.id} id={image.id} href={image.imgUrl} />
    ));

    return (
      <div className='App bg-dark'>
        <Nav /> <h1>Score: {this.state.score}</h1>
        <div className='bg-dark text-white mr-auto'>
          <h3>
            Score: {this.state.score} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Top
            Score: {this.state.topScore}
          </h3>
        </div>
        <header className='App-header'>
          <Container>
            <Row whatId={this.whatId}>{presImages}</Row>
          </Container>

          <button className='btn btn-primary' onClick={this.handleIncrement}>
            Score
          </button>
        </header>{' '}
      </div>
    );
  }
}

export default App;
