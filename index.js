'use strict';

module.exports = {
    extends: ['./javascript.js', 'plugin:prettier/recommended'],
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        node: true,
        es2021: true,
        browser: true,
    },
    overrides: [
        {
            files: ['./**/*.ts'],
            extends: ['./typescript.js', 'plugin:prettier/recommended'],
        },
    ],
};
