/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
	clearMocks: true,
	collectCoverageFrom: ['<rootDir>/src/modules/**/*.ts'],
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageReporters: ['text-summary', 'lcov'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/src/',
	}),
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/*.spec.ts'],
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
}
