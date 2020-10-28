import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Tests for <CounterApp /> component', () => {

  let wrapper = shallow( <CounterApp />);

  beforeEach(() => {
    wrapper = shallow( <CounterApp />);
  });

  test('It should render <CounterApp /> component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show <h2>100</h2> in counter value passed by property', () => {
    const wrapper = shallow( <CounterApp value={100} /> );

    // .trim() delete spaces between the value and tags <h2> 100 </h2>
    const headerValueText = wrapper.find('h2').text().trim();

    expect(headerValueText).toBe('100');
  });

  test('The button +1 should increment counter by 1', () => {
    wrapper.find('button').at(0).simulate('click');
    const headerValueText = wrapper.find('h2').text().trim();
    expect(headerValueText).toBe('1');
  });

  test('The button -1 should decrement counter by 1', () => {
    wrapper.find('button').at(2).simulate('click');
    const headerValueText = wrapper.find('h2').text().trim();
    expect(headerValueText).toBe('-1');
  });

  test('The button reset should set counter to default value', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const headerValueText = wrapper.find('h2').text().trim();
    expect(headerValueText).toBe('105');
  });
});