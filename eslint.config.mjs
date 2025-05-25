import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
        extends: ['next'],
        rules: {
            "import/order": [
                "error", {
                    "groups": [
                        "external",
                        "builtin",
                        "object",
                        "sibling",
                        "parent",
                        "internal",
                        "type",
                        "index"
                    ],

                    "newlines-between": "always",
                    "pathGroups": [
                        {
                            "pattern": "next",
                            "group": "object",
                            "position": "after"
                        },
                        {
                            "pattern": "@/core/**",
                            "group": "object",
                            "position": "after"
                        },
                        {
                            "pattern": "@/domain/**",
                            "group": "builtin",
                            "position": "before"
                        },
                        {
                            "pattern": "@/components/**",
                            "group": "builtin",
                            "position": "after"
                        }
                    ],
                    "distinctGroup": false
                }
            ]
        },
    }),
]

export default eslintConfig;
