#!/usr/bin/env ruby
# encoding: utf-8
num = ARGV[0].to_i
if num >= -42  and num <= 42
	puts "#{num} is between -42 and 42"
else
	puts "#{num} is not between -42 and 42"
end

