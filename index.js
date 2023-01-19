'use strict';

module.exports = {
    extends: ['./javascript.js', 'eslint-config-prettier'],
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
            files: ['./**/*.ts', './**/*.tsx'],
            extends: ['./typescript.js', 'eslint-config-prettier'],
        },
    ],
};
