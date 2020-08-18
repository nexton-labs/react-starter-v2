const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");
// Comment this out whenever bundle analyzer is needed:
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  entry: ["./src/index.js"],
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["dist"] }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.ProvidePlugin({
      errorService: "errorService"
    }),
    // Comment this out whenever bundle analyzer is needed:
    // new BundleAnalyzerPlugin(),
    new WebappWebpackPlugin({
      logo: "./src/favicon.png",
      cache: true,
      favicons: {
        appName: "crossing-minds Application",
        appDescription: "crossing-minds Application",
        developerName: "Nexton",
        developerURL: "https://www.nextonlabs.com/",
        background: "#1a2d56",
        theme_color: "#1a2d56",
        icons: {
          coast: false,
          firefox: false,
          windows: false,
          yandex: false
        }
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      errorService: path.resolve(__dirname, "./src/utils/errorService")
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        use: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  }
};
