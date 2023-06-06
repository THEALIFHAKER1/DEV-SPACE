import { render } from '@testing-library/react';

import Button, { type IButtonProps } from './Button';

const renderComponent = (props: Partial<IButtonProps>) => {
  const defaultProps: IButtonProps = {
    name: 'John Doe',
  };
  return render(<Button {...defaultProps} {...props} />);
};

describe('BaseTemplate', () => {
  it('should render', () => {
    const { container } = renderComponent({});

    expect(container).toBeInTheDocument();
  });
});
