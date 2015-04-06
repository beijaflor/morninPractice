#!/usr/bin/env ruby
# encoding: utf-8

def repeat(n)
  for i in 1..n
    puts "#{i} =>"
    yield
  end
end

repeat(3) { puts 'pyonpyon' }
