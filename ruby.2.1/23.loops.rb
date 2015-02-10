#!/usr/bin/env ruby
# encoding: utf-8

puts 'upto'
5.upto(10) do |num|
  puts num
end

puts 'downto'
10.downto(5) do |num|
  puts num
end

puts 'times'
5.times do |num|
  puts num
end

puts 'step'
5.step(20, 2) do |num|
  puts num
end
