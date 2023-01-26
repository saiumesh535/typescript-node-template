module.exports = {
    ignorePatterns: ["coverage/*"],
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier'
    ],
    "rules": {
        "prettier/prettier": ["error"],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
    },
    "overrides": [
        {
            "files": ["**/*.ts", "**/*.js"],
            "rules": {
                "simple-import-sort/imports": [
                    "error",
                    {
                        "groups": [
                            // `react` first, `next` second, then packages starting with a character
                            ["^[a-z]"],
                            // Packages starting with `@`
                            ["^@"],
                            // Packages starting with `~`
                            ["^~"],
                            // Imports starting with `../`
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Imports starting with `./`
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                            // Side effect imports
                            ["^\\u0000"]
                        ]
                    }
                ]
            }
        }
    ]
};