import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Tests in < FirstApp /> Component', () => {
  test("It should show a message - Hello, I'm Toledo", () => {

    const greeting = "Hello, I'm Toledo";
    const { getByText } = render(<FirstApp greeting={greeting} />);

    expect(getByText(greeting)).toBeInTheDocument();

  });
});