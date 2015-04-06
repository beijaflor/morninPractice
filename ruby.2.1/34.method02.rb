#!/usr/bin/env ruby
# encoding: utf-8

def sum(x, y)
  x + y
end

def redundant_sum(x, y)
  return x + y
end

puts sum(21, 21)
puts redundant_sum(21, 21)
