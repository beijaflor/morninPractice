#!/usr/bin/env ruby
# encoding: utf-8

def arithmetic_sequence(init:1, diff:1, count:10)
  current = init
  if block_given?
    count.times do
      yield(current)
      current += diff
    end
  else
    Array.new.tap do |a|
      count.times do
        a << current
        current += diff
      end
    end
  end
end

arithmetic_sequence(init:2, diff:3, count:5) do |n|
  puts n
end

p arithmetic_sequence(init:2, diff:3, count:5)
