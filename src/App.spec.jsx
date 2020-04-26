import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App components', () => {
  it('Renders ok', () => {
    const app = shallow(<App />);
    expect(app.length).toBe(1);
  });
});
