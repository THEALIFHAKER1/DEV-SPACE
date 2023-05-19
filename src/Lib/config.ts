import * as any from 'env-var';

const config = {
  port: any.get('NEXT_PUBLIC_PORT').required().asInt(),
};

export default config;
