#!/usr/bin/env ruby
# encoding: utf-8

require_relative "27.rabbit"

rabbit = Rabbit.new
lop = LopEar.new(name: 'lopchan')

[rabbit, lop].each do |rabbit|
  rabbit.say_name
  rabbit.print_ears
  puts rabbit.to_s
  puts '';
end
