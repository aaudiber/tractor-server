const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/index.tsx',
	output:{
		path: path.resolve(__dirname, "static/assets"),
		filename: 'bundle.js'
	},

  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{ 
				test: /\.tsx?$/, 
				loader: "awesome-typescript-loader" 
			},
			{ 
				enforce: "pre", 
				test: /\.js$/, 
				loader: "source-map-loader" 
			}
		],
	},
};
