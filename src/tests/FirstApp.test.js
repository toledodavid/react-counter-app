import React from 'react';
import '@testing-library/jest-dom';
//import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import FirstApp from '../FirstApp';

describe('Tests in < FirstApp /> Component', () => {
  // test("It should show a message - Hello, I'm Toledo", () => {
  //   const greeting = "Hello, I'm Toledo";
  //   const { getByText } = render(<FirstApp greeting={greeting} />);
  //   expect(getByText(greeting)).toBeInTheDocument();
  // });

  test('It should show <FirstApp /> component correctly', () => {
    const greeting = "Hello, I'm Toledo";
    const wrapper = shallow( <FirstApp greeting={greeting} /> );

    expect(wrapper).toMatchSnapshot();
  });

  test('It should show a subtitle sent by props' , () => {
    const greeting = "Hello, I'm Toledo";
    const subtitle = 'This is a subtitle';

    const wrapper = shallow(<FirstApp greeting={greeting} subtitle={subtitle} />);

    const textParagraph = wrapper.find('p').text();
    
    expect(textParagraph).toBe(subtitle);
  });
});