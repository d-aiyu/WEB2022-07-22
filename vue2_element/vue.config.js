const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

//代理
module.exports = {
  devServer: {
    Proxy: {
      "/admin": {
        target: "http://127.0.0.1:8686",
      },
      "/upload": {
        target: "http://127.0.0.1:8686",
      },
    },
  },
};
