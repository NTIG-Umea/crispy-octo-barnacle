const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');


    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
