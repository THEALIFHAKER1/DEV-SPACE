import * as env from 'env-var';

const NEXT_PUBLIC_PORT = env.get('NEXT_PUBLIC_PORT').required().asString();
const config = {
  NEXT_PUBLIC_PORT,
};

export default config;
