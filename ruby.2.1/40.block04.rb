#!/usr/bin/env ruby
# encoding: utf-8

def repeat1(n)
  for i in 1..n
    puts "#{i} =>"
    yield
  end
end

def repeat2(n, &procedure)
  for i in 1..n
    puts "#{i} =>"
    procedure.call
  end
end

procedure = -> { puts 'quack' }
repeat1(3, &procedure)
repeat1(3) { puts 'meow' }

repeat2(3, &procedure)
repeat2(3) { puts 'meow' }
