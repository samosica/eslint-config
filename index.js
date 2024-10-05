import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        files: ["**/*.js", "**/*.mjs"],
        extends: [eslint.configs.recommended],
    },
    {
        files: ["**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            "@typescript-eslint/no-floating-promises": [
                "error",
                {
                    ignoreIIFE: true,
                },
            ],
            "@typescript-eslint/no-non-null-assertion": ["error"],
        },
    },
    {
        rules: {
            "import/prefer-default-export": "off",
            "no-console": "off",
            "no-restricted-syntax": [
                "error",
                "ForInStatement",
                "LabeledStatement",
                "WithStatement",
            ],
            "no-continue": "off",
            "no-await-in-loop": "error",
        },
    },
    // disable rules which conflict with Prettier
    prettier,
);
