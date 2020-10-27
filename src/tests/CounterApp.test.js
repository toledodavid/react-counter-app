import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Tests for <CounterApp /> component', () => {

  test('It should render <CounterApp /> component correctly', () => {
    const wrapper = shallow( <CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show <h2>100</h2> in counter value passed by property', () => {
    const wrapper = shallow( <CounterApp value={100} /> );

    // .trim() delete spaces between the value and tags <h2> 100 </h2>
    const headerValueText = wrapper.find('h2').text().trim();

    expect(headerValueText).toBe('100');
  });
});