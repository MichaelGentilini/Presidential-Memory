import React from 'react';
import './index.css';
import Nav from './Nav.js';
import Button from './Button.js';
import presidentData from './presidentImages.js';
import { Row, Container } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      presidentData,
      message: 'Click A Pesident to Begin the Game',
    };
  }

  updateClick = id => {
    this.setState({
      message: '',
    });
    const images = this.state.presidentData.map(x => x);

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffle(presidentData);

    images.forEach(image => {
      if (image.id === id) {
        if (image.isClicked === false) {
          image.isClicked = true;
          image.message = 'Good Guess, You got one!';

          this.setState({
            presidentData: images,
            score: this.state.score + 1,
            // message: 'Good Guess, You got one!',
          });

          if (this.state.score >= this.state.topScore) {
            this.setState({
              topScore: this.state.topScore + 1,
              message: 'New High Score!',
            });
          }
        } else if (image.isClicked) {
          this.handleReset();
        }
      }
    });
  };

  handleReset = () => {
    var resetArray = this.state.presidentData.map(image => ({
      ...image,
      isClicked: false,
    }));
    this.setState({
      presidentData: resetArray,
      score: 0,
      message: 'Sorry, you already guessed that one.',
    });
  };

  render() {
    const presImages = presidentData
      .slice(0, 15) // ! Number of images modified
      .map(image => (
        <Button
          key={image.id}
          id={image.id}
          href={image.imgUrl}
          isClicked={image.isClicked}
          updateClick={this.updateClick}
        />
      ));

    return (
      <div className='App bg-dark'>
        <Nav />
        <div className='bg-dark'>
          <h2 className='text-white text-center mt-4'>
            Score: {this.state.score} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Top
            Score: {this.state.topScore}
          </h2>
          <h4 className='text-warning text-center mt-3'>
            {' '}
            {/* Hello */}
            {this.state.message}{' '}
          </h4>
        </div>
        {/* <p className='text-white'>{this.state.message}</p> */}
        <div className='bg-dark text-white' />

        <Container className='mt-3 text-center mx-auto'>
          <Row>{presImages}</Row>
        </Container>
      </div>
    );
  }
}

export default App;
