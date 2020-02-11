install:
	npm install

start:
	npx babel-node src/bin/games/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
