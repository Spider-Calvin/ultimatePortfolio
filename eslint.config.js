import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prettier/prettier': [
				'error',
				{
					arrowParens: 'avoid',
					bracketSameLine: true,
					bracketSpacing: true,
					singleQuote: true,
					trailingComma: 'all',
					semi: true,
					tabWidth: 2,
					useTabs: true,
					jsxSingleQuote: true,
					proseWrap: 'preserve',
					printWidth: 100,
					htmlWhitespaceSensitivity: 'css',
				},
			],
			'react-hooks/rules-of-hooks': 'off',
			'react-hooks/exhaustive-deps': 'warn',
			'tailwindcss/classnames-order': 'warn',
			'tailwindcss/no-custom-classname': 'off',
			'react/prop-types': 'off',
		},
	},
];
