const path = require("path");
const eslintDescriptive = require("eslint-plugin-descriptive");

module.exports = {
	ignorePatterns: [".eslintrc.js", "frontend/**/*"],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	noInlineConfig: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: path.join(__dirname, "tsconfig.json"),
		sourceType: "module",
	},
	plugins: ["descriptive", "jsdoc"],
	extends: ["prettier"],
	overrides: [
		{
			files: ["**/*.spec.ts"],
			rules: {
				...eslintDescriptive.configs.all.rules,
				"descriptive/max-lines": "off",
				// describe functions exceed this limit easily
				"descriptive/max-lines-per-function": "off",
				// describe/it have 2 additional callbacks
				"descriptive/max-nested-callbacks": ["error", 2 + 2],
			},
		},
		{
			files: ["**/Log.ts"],
			rules: {
				...eslintDescriptive.configs.all.rules,
				"descriptive/no-console": "off",
			},
		},
	],
	rules: {
		// ...eslintDescriptive.configs.all.rules,
		/* JSDOC lint rules */
		"jsdoc/check-alignment": 2,
		"jsdoc/check-indentation": 2,
		"jsdoc/require-asterisk-prefix": 2,
		"jsdoc/no-bad-blocks": 2,
	},
};
