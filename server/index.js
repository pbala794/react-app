import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(webpackMiddleware( webpack(webpackConfig) ) );

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html')); 
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port: 3000');
});