import * as __SNOWPACK_ENV__ from '../../snowpack/env.js';

const snowpackEnv = __SNOWPACK_ENV__;
export const env = {
  baseUrl: snowpackEnv.SNOWPACK_PUBLIC_BASE_URL,
  stage: snowpackEnv.MODE
};
