// jest.config.js
module.exports = {
	setupFilesAfterEnv: ['<rootDir>/unit-tests/setup-jest.js'],
	verbose: true,
	testEnvironment: 'jsdom',
	"moduleNameMapper": {
		"^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
		"^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
		"module_name_(.*)": "<rootDir>/substituted_module_$1.js",
		"assets/(.*)": [
			"<rootDir>/images/$1"
		],
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/unit-tests/fileMock.js",
		"\\.(css|less)$": "<rootDir>/unit-tests/styleMock.js"
	}
};
