

//this file configures the 
//webpack target and destination, as 
//well as excludes certain things

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            //this is where you can set easy to reference aliases!
            // like this: Greeter: 'public/components/Greeter.jsx',            
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};