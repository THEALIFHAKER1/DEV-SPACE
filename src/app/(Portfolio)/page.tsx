import config from '@/Lib/config';

const Home = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold">HOME</h1>
      <p>port number is {config.port}</p>
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
    </main>
  );
};

export default Home;
