#!/usr/bin/env ruby
# encoding: utf-8

require_relative "32.rabbit"

rabbits = Array.new.tap do |array|
  [7.0, 1.0, 5.0, 1.0].each do |length|
    array << Rabbit.new(length_of_ears: length)
  end
end

rabbits.each_with_index do |rabbit, i|
  puts "rabbit#{i}: #{rabbit.length_of_ears}"
end

puts "rabbits[0] < rabbits[1]: #{rabbits[0] < rabbits[1]}"
puts "rabbits[0] > rabbits[1]: #{rabbits[0] > rabbits[1]}"
puts "rabbits[1] == rabbits[3]: #{rabbits[1] < rabbits[3]}"
puts "rabbits[1] <= rabbits[3]: #{rabbits[1] < rabbits[3]}"
puts "rabbits[0] <= rabbits[1]: #{rabbits[0] < rabbits[1]}"


puts rabbits.sort
