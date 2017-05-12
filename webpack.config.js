
const loaders = require('./webpack-loaders');
const plugins = require('./webpack-plugins');
const PATHS = require('./webpack-paths');


const config = {
  entry: ['script-loader!jquery/dist/jquery.min.js',
          'script-loader!foundation-sites/dist/js/foundation.min.js',
          './app/app.jsx'
        ],
  output: {
    path: PATHS.public,
    filename: 'bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    // 'rules' substitutes 'loaders'
    rules: [
      loaders.babel,
      loaders.sassloader
    ]
  },
  plugins: [
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.loaderOptionsPlugin,
    plugins.ugligyPlugin
  ],
  resolve: {
    // no need for the empty string extension anymore
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Clock: 'app/components/Clock.jsx',
      Controls: 'app/components/Controls.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map'
};


module.exports = config;
