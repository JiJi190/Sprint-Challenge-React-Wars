import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer';
import CharacterList from './components/CharacterList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<App />).toJSON()

        expect(tree).toMatchSnapshot();
    })
})

describe('<CharacterList />', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<CharacterList />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  }); 