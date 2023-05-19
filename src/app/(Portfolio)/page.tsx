import config from '@/Lib/config';

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <p>port number is {config.port}</p>
    </main>
  );
};

export default Home;
