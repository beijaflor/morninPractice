#!/usr/bin/env ruby
# encoding: utf-8

case  ARGV[0].to_i
when -Float::INFINITY..-100
  puts 'It is -100 or less.'
when -99...0
  puts 'It is in -99 ~ -1.'
when 0
  puts 'It is zero.'
when 1..99
  puts 'It is in 1 ~ 99.'
when 100..Float::INFINITY
  puts 'It is 100 or more.'
end
