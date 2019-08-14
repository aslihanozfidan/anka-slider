import React from 'react';
import Slider from './Slider';
import './style.css';
import '../assets/fonts/style.css';

export default class SliderContainer extends React.Component {
  render() {
    const items = [
      {
        url:
          'https://images.unsplash.com/photo-1561775330-4d22fde8aeed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        alt: 'Image1'
      },
      {
        url:
          'https://images.unsplash.com/photo-1563211183-1bc044b6c2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        alt: 'Image2'
      },
      {
        url:
          'https://images.unsplash.com/photo-1563229630-447ab47bd6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=634&q=80',
        alt: 'Image3'
      },
      {
        url:
          'https://images.unsplash.com/photo-1563221555-8f771747dc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        alt: 'Image4'
      },
      {
        url:
          'https://images.unsplash.com/photo-1563203166-79015ea24669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        alt: 'Image5'
      },
      {
        url: 'https://images.unsplash.com/photo-1563162651-157fde763e85?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        alt: 'Image5'
      }
    ];
    const settings = {
      animation: true,
      arrows: true
    }

    return (
      <div>
        <Slider items={items} settings={settings} />
      </div>
    );
  }
}
