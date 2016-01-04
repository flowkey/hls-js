Package.describe({
    name: 'flowkey:hls-js',
    version: '0.4.2',

    // Brief, one-line summary of the package.
    summary: 'HLS.js - Javascript only HLS implementation',

    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/dailymotion/hls.js',

    // To avoid submitting documentation, set this field to null.
    documentation: null
});

Package.onUse(function(api) {
    api.addFiles('hls-js.js');
});
