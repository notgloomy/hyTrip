// vue cli
// postcss.config.js
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
            selectorBlackList: ['favor']
        },
    },
};