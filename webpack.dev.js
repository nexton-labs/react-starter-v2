const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// TODO: We need to setup dev environment optimized as production then
// We must set mode equals to "production"
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/"
  }
});
