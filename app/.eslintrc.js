module.exports = {
    root: true,
    extends: ["@react-native-community", "prettier", "prettier/react"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    rules: {
        "prettier/prettier": "error",
        "react-native/no-inline-styles": "off",
        "react-native/no-color-literals": "off",
        "react-native/no-raw-text": "off",
        "react-native/no-single-element-style-arrays": "off",
        "react-native/no-unused-styles": "off",
        "react-native/split-platform-components": "off",
        "react-native/no-raw-text": "off",
        "react-native/no-color-literals": "off",
    },
};