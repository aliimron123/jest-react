import type { Config } from 'jest';

const config: Config = {
	testEnvironment: 'jsdom', // Ensures DOM-like environment for React testing
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Transforms TS/JS with Babel
	},
	moduleNameMapper: {
		'\\.(css|scss|sass)$': 'identity-obj-proxy', // Mocks CSS modules
		'^@/(.*)$': '<rootDir>/src/$1', // Matches Vite alias for @
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Sets up Jest DOM
};

export default config;
