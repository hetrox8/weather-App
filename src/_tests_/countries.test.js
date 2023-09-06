// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Countries from '../Components/Countries';

describe('', () => {
  it('testing render component', () => {
    const count = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(count).toMatchSnapshot();
  });
});
