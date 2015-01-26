#!/usr/bin/env ruby
# encoding: utf-8

# for
for str in ['alice', 'in', 'wonderland']
	puts str
end

for i in 1..10
	puts i
end

# each (preferable)
['alice', 'in', 'wonderland'].each do |str|
	puts str
end
