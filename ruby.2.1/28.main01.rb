#!/usr/bin/env ruby
# encoding: utf-8

require_relative "28.rabbit"

rabbit = Rabbit.new
puts rabbit.to_s

lop = LopEar.new(name: 'lopchan')
puts lop.to_s

lop.print_class_contents_and_variables

rabbit.print_description
lop.print_description
