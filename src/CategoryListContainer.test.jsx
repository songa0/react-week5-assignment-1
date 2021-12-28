import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import CategoryListContainer from './CategoryListContainer';

jest.mock('react-redux');

describe('CategoryListContainer', () => {
  const renderComponent = () => render(<CategoryListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      categories: [
        {
          id: 1,
          name: '한식',
        },
        {
          id: 2,
          name: '중식',
        },
        {
          id: 3,
          name: '일식',
        },
        {
          id: 4,
          name: '양식',
        },
        {
          id: 5,
          name: '분식',
        },
        {
          id: 6,
          name: '과자',
        },
        {
          id: 7,
          name: '치킨',
        },
        {
          id: 1003,
          name: '테스트',
        },
        {
          id: 1034,
          name: '음료',
        },
        {
          id: 1036,
          name: '사탕',
        },
      ],
    }));
  });

  it('CategoryListContainer 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 카테고리 리스트가 노출된다.', () => {
    const { container } = renderComponent();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
  });
});
