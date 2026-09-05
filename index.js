/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */

const commonRules = {
    curly: ["error", "all"]
};

/* eslint-enable sort-keys/sort-keys-fix */
const errorRules = {
    "@stylistic/lines-around-comment": [
        "error",
        { allowBlockStart: true, beforeBlockComment: false, beforeLineComment: true }
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-use-before-define": [
        "error",
        {
            functions: false,
            ignoreTypeReferences: true
        }
    ],
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/restrict-plus-operands": ["error", { allowNumberAndString: true }],
    "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
    "@typescript-eslint/switch-exhaustiveness-check": "error"
};
/* eslint-disable sort-keys/sort-keys-fix */

/* eslint-enable sort-keys/sort-keys-fix */
const offRules = {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "no-use-before-define": "off"
};
/* eslint-disable sort-keys/sort-keys-fix */

module.exports = {
    extends: ["eslint-config-cakkypamucm"],
    rules: commonRules,
    overrides: [
        {
            files: ["**/*.ts"],
            parser: require.resolve("@typescript-eslint/parser"),
            parserOptions: { project: true },
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/strict-type-checked",
                "plugin:@typescript-eslint/stylistic-type-checked",
                "plugin:import-x/typescript",
                "prettier"
            ],
            rules: {
                ...commonRules,
                ...errorRules,
                ...offRules
            },
            settings: {
                "import-x/resolver": {
                    typescript: { alwaysTryTypes: true }
                }
            }
        }
    ]
};
