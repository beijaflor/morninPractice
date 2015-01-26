#!/usr/bin/env ruby
# encoding: utf-8
teapot = if ARGV[0].to_i == 42
	teapot = 'tea'
else
	teapot = 'coffee'
end
puts teapot
