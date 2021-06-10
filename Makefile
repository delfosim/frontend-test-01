lint:  ;@echo "Linting....."; \
	./node_modules/.bin/eslint . --fix

run: ;@echo "Starting....."; \
	npm start

install: ;@echo "Installing....."; \
	npm install

build: ;@echo "Building....."; \
	npm run build

test: ;@echo "Testing....."; \
	npm run cypress

test-open: ;@echo "Testing....."; \
	npm run cypress:open

clean: ;
	rm -rf node_modules