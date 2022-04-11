const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
    let url =
        'https://api.github.com/repos/NTIG-Umea/crispy-octo-barnacle/issues';

    /* This returns a promise */
    return EleventyFetch(url, {
        duration: '1s', // save for 1 day
        type: 'json', // we’ll parse JSON for you
    });
};
