import React from 'react';
import Item from './Item';

const defaultSettings = {
  animation: true,
  arrows: true
}

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.isFirst = false;
    this.lastItem = null;
    this.firstItem = null;

    this.state = {
      startPoint: null,
      animate: true
    };
  }

  componentDidMount() {
    this.createItem(this.props.items);
  }

  createItem = (urls) => {
    for (let url of urls) {
      this.sliderItemFactory(new Item(url));
    }
  };

  sliderItemFactory = (item) => {
    item.hasPrev = this.isFirst;
    item.prev = this.lastItem;
    item.hasNext = false;
    item.next = null;

    if (this.lastItem) {
      this.lastItem.hasNext = true;
      this.lastItem.next = item;
    }

    if (!this.isFirst) {
      this.isFirst = true;
      this.setState({
        startPoint: item
      });
    }
    this.lastItem = item;
  };

  prev = () => {
    if (this.state.startPoint && this.state.startPoint.hasPrev) {
      this.setState({
        startPoint: this.state.startPoint.prev
      });

      this.props.settings.animation && this.animate();
    }
  };

  next = () => {
    if (this.state.startPoint && this.state.startPoint.hasNext) {
      this.setState({
        startPoint: this.state.startPoint.next
      });

      this.props.settings.animation && this.animate();
    }
  };

  animate = () => {
    this.setState({ animate: false }, () => {
      setTimeout(() => {
        this.setState({ animate: true });
      }, 250);
    });
  };

  render() {
    const { startPoint, animate } = this.state;
    const { settings } = this.props;

    return (
      <div className='slider-wrapper'>
        {startPoint &&
        startPoint.image.url && (
          <img
            src={startPoint && startPoint.image.url}
            alt={startPoint.image.alt}
            className={animate ? 'animate' : ''}
          />
        )}
        {settings.arrows && (
          <div className='btn-wrapper'>
            <span onClick={(e) => this.prev(e)} className={startPoint && startPoint.hasPrev ? '' : 'disabled'} />
            <span onClick={(e) => this.next(e)} className={startPoint && startPoint.hasNext ? '' : 'disabled'} />
          </div>
        )}
      </div>
    );
  }
}
