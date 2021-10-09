module.exports = {
    root: true,
    extends: ['standard'],
    globals: {
        IS_DEV: 'readonly'
    },
    rules: {
        indent: ['error', 4]
    },
    parserOptions: {
        ecmaVersion: 2021
    }
}
