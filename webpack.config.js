module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './app.js', // jsx 는 명시해야 하고 js 는 .js 빼도 됨.
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  // devServer: {
  //   inline: true,
  //   port: 3333
  // },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}
