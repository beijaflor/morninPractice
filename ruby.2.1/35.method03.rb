#!/usr/bin/env ruby
# encoding: utf-8

def sum(*args)
  puts args.class
  args.inject(:+)
end

puts sum(1, 2, 3, 4, 5)
puts sum(1)
puts sum
