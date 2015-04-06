#!/usr/bin/env ruby
# encoding: utf-8

def increase
  n = 0
  -> { n += 5 }
end

3.times { p increase.call }

puts '==========='

increase_proc = increase
3.times { p increase_proc.call }
