'use strict';

module.exports = {
    extends: ['./javascript.js', 'eslint-config-prettier'],
    env: {
        node: true,
        es2021: true,
        browser: true,
    },
    overrides: [
        {
            files: ['./**/*.ts'],
            extends: ['./typescript.js', 'eslint-config-prettier'],
        },
    ],
};
