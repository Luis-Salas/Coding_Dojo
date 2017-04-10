BIN = ./node_modules/.bin

.PHONY: main
main: test

.PHONY: test
test:
	$(BIN)/mocha --ui bdd --reporter spec ./test


.PHONY: generate-test-blog
generate-test-blog:
	(cd test/test-blog; freeze build --unpublished) 

