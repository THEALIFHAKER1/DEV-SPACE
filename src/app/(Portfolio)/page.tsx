import config from '@/Lib/config';

export const getServerSideProps = async () => {
  const string = config.NEXT_PUBLIC_PORT;
  return {
    props: {
      string,
    },
  };
};

const Home = () => {
  return (
    <main>
      <div>
        <h1 className="text-4xl font-bold">HOME</h1>
        <div>The value of the `NEXT_PUBLIC_PORT` environment variable is: {process.env['NEXT_PUBLIC_PORT']}</div>
      </div>
      <div>
        <div className="bg-primary text-secondary">
          <h1>Primary Color</h1>
        </div>

        <div className="bg-secondary text-primary">
          <h1>Secondary Color</h1>
        </div>

        <div className="bg-background text-text">
          <h1>Background Color</h1>
        </div>

        <div className="bg-text text-background">
          <h1>Text Color</h1>
        </div>

        <div className="bg-primary-light text-secondary-light">
          <h1>Primary Light Color</h1>
        </div>

        <div className="bg-secondary-light text-primary-light">
          <h1>Secondary Light Color</h1>
        </div>

        <div className="bg-background-light text-text-light">
          <h1>Background Light Color</h1>
        </div>

        <div className="bg-text-light text-background-light">
          <h1>Text Light Color</h1>
        </div>

        <div className="bg-primary-dark text-secondary-dark">
          <h1>Primary Dark Color</h1>
        </div>

        <div className="bg-secondary-dark text-primary-dark">
          <h1>Secondary Dark Color</h1>
        </div>

        <div className="bg-background-dark text-text-dark">
          <h1>Background Dark Color</h1>
        </div>

        <div className="bg-text-dark text-background-dark">
          <h1>Text Dark Color</h1>
        </div>
      </div>
      <div>
        <h1 className="text-5xl">Heading 5XL</h1>
        <h1 className="text-4xl">Heading 4XL</h1>
        <h1 className="text-3xl">Heading 3XL</h1>
        <h1 className="text-2xl">Heading 2XL</h1>
        <h2 className="text-xl">Heading XL</h2>
        <h3 className="text-lg">Heading LG</h3>
        <h4 className="text-md">Heading MD</h4>
        <h5 className="text-sm">Heading SM</h5>
        <h6 className="text-xs">Heading XS</h6>
        <p className="text-base">Paragraph BASE</p>
      </div>
    </main>
  );
};

export default Home;
