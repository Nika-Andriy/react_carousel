import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  step: number;
  itemWidth: number;
  frameSize: number;
}

const animationDuration = 1000;

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    itemWidth: 130,
    frameSize: 3,
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>
        <input
          for="stepId"
          className="input"
          onChange={event => this.setState({ step: +event.target.value })}
        />
        <input
          for="itemId"
          className="input"
          onChange={event => this.setState({ itemWidth: +event.target.value })}
        />
        <input
          for="frameId"
          className="input"
          onChange={event => this.setState({ frameSize: +event.target.value })}
        />

        <Carousel
          images={images}
          step={this.state.step}
          itemWidth={this.state.itemWidth}
          frameSize={this.state.frameSize}
          animationDuration={animationDuration}
          infinite={false}
        />
      </div>
    );
  }
}

export default App;
