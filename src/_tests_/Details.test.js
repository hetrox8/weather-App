import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import store from '../Redux/store';
import Details from '../Components/Details';

test('renders Details component without errors', () => {
  render(
    <Provider store={store}>
      <Router>
        <Details />
      </Router>
    </Provider>,
  );
});
