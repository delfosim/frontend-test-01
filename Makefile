lint:  ;@echo "Linting....."; \
	./node_modules/.bin/eslint . --fix

run: ;@echo "Starting....."; \
	npm start

install: ;@echo "Installing....."; \
	npm install

build: ;@echo "Building....."; \
	npm run build

build: ;@echo "Testing....."; \
	npm run cypress

clean : ;
	rm -rf node_modules