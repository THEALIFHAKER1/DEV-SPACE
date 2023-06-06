import { cva, type VariantProps } from 'class-variance-authority';

const BlogCardStyles = cva('', {
  variants: {
    intent: {
      primary: '',
      secondary: '',
    },
    /// ... other variants
  },
});

export interface IBlogCardProps extends VariantProps<typeof BlogCardStyles> {
  // name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlogCard = ({ intent = 'primary' }: IBlogCardProps) => {
  // const greet = 'Hello world!';

  return <div />;
};

export default BlogCard;
