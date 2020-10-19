import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurantRegions from '../__fixtures__/restaurantRegions';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantRegions,
  }));

  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Restaurants');
  expect(container).toHaveTextContent('서울');
});
