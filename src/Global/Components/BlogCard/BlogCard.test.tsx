import { render } from '@testing-library/react';

import BlogCard, { type IBlogCardProps } from './BlogCard';

const renderComponent = (props: Partial<IBlogCardProps>) => {
  const defaultProps: IBlogCardProps = {
    name: 'John Doe',
  };
  return render(<BlogCard {...defaultProps} {...props} />);
};

describe('BlogCard', () => {
  it('should render', () => {
    const { container } = renderComponent({});

    expect(container).toBeInTheDocument();
  });
});
