import { cva, type VariantProps } from 'class-variance-authority';

const BaseTemplateStyles = cva('flex w-60 items-center justify-center rounded-xl p-4', {
  variants: {
    intent: {
      primary: 'bg-background-light text-primary-dark',
      secondary: 'bg-background-dark text-text-dark',
    },
    /// ... other variants
  },
});

export interface IBaseTemplateProps extends VariantProps<typeof BaseTemplateStyles> {
  name: string;
}

const BaseTemplate = ({ intent = 'primary', name }: IBaseTemplateProps) => {
  const greet = 'Hello world!';

  return <div className={BaseTemplateStyles({ intent })}>{`${name}, ${greet}`}</div>;
};

export default BaseTemplate;
