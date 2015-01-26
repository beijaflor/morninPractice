#!/usr/bin/env ruby
# encoding: utf-8
case ARGV[0].to_i
when 0
	puts "zero"
when 1
	puts "one"
when 2, 3
	puts "two or three"
else
	puts "other"
end
