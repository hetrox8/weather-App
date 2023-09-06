/* eslint-disable linebreak-style */
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Navbar from '../Components/Navbar';

describe('Navbar', () => {
  it('testing render component', () => {
    const nav = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(nav).toMatchSnapshot();
  });
});
