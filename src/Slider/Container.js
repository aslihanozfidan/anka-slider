import React from 'react';
import Slider from './Slider';
import './style.css';
import '../assets/fonts/style.css';

export default class SliderContainer extends React.Component {
  render() {
    return (
      <div>
        <Slider items={this.props.items} settings={this.props.settings} />
      </div>
    );
  }
}
