#!/usr/bin/env ruby
# encoding: utf-8

procedure1 = Proc.new { |word| puts word }
procedure2 = proc { |word| puts word }
procedure3 = lambda { |word| puts word }
procedure4 = ->(word) { puts word }
procedure5 = -> { puts 'cluck' }

procedure1.call('meow')
procedure2.call('quack')
procedure3.call('oink')
procedure4.call('bowwow')
procedure5.call
