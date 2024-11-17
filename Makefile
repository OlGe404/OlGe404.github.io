#!/usr/bin/env make

.SILENT:
.ONESHELL:

start-server:
	cd $(shell git rev-parse --show-toplevel)
	bundle install
	bundle exec jekyll serve --livereload
