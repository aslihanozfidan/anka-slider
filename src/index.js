import React from 'react';
import SliderContainer from './Slider/Container';

export default class AnkaSlider extends React.Component {
  render() {
    return <SliderContainer items={this.props.items} settings={this.props.settings} />;
  }
}
