import React from 'react';
import ReactDOM from 'react-dom';
import TextBoxPlaceholder from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextBoxPlaceholder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
