import path from 'path';

export default {
    entry: path.join(__dirname, '/client/app.js'),
    output: {
        path: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
}