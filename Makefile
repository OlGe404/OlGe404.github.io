#!/usr/bin/env make

.SILENT:
.ONESHELL:

GIT_ROOT := $(shell git rev-parse --show-toplevel)

start-server: cdroot
	bundle install
	bundle exec jekyll serve --livereload

cdroot:
	cd $(GIT_ROOT)
