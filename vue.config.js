module.exports = {
    runtimeCompiler:true
}
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}