#!/usr/bin/env ruby
# encoding: utf-8

def hoge
  procedure = Proc.new{ return 'Return from Proc.new' }
  procedure.call
  return 'return from hoge'
end

def fuga
  procedure = -> { return 'Return from Lambda' }
  procedure.call
  return 'return from fuga'
end

puts hoge
puts fuga
