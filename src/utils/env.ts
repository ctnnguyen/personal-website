const snowpackEnv = import.meta.env

export const env = {
  baseUrl: snowpackEnv.SNOWPACK_PUBLIC_BASE_URL,
  stage: snowpackEnv.MODE,
}
