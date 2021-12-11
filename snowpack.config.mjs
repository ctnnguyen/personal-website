/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    [
      '@snowpack/plugin-typescript',
    ],
  ],
  packageOptions: {
    types: true,
  },
  devOptions: {
    port: 8080,
  },
  buildOptions: {
    out: "build",
    baseUrl: "/",
  },
  alias: {
    "components": "./src/components",
    "pages": "./src/pages",
    "utils": "./src/utils",
  },
}
