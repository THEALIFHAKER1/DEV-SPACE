import { cva, type VariantProps } from 'class-variance-authority';

const ButtonStyles = cva('flex w-60 items-center justify-center p-4', {
  variants: {
    intent: {
      primary: 'bg-background-light text-primary-dark',
      secondary: 'bg-background-dark text-text-dark',
    },
    /// ... other variants
  },
});

export interface IButtonProps extends VariantProps<typeof ButtonStyles> {
  name: string;
}

const Button = ({ intent = 'primary', name }: IButtonProps) => {
  const greet = 'Hello world!';

  return (
    <div>
      <button type="submit" className={ButtonStyles({ intent })}>
        {name}
        {greet}
      </button>
    </div>
  );
};

export default Button;
