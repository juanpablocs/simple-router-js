module.exports = {
    entry:'./src/app.js',
    module:{
        loaders:[ {test:/js$/, loader:'babel-loader'}, ]
    }
}