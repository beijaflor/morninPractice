#!/usr/bin/env ruby
# encoding: utf-8

# while
i = 1
while i <= 10
	puts i
	i += 1
end

# midifier while
i = 1
i += 1 while i <=10
puts i

# break
i = 1
while true
	puts i
	i += 1
	break if i > 10
end

# next
i = 0
while i < 10
	i += 1
	next if i % 3 == 0
	puts i
end

# until
i = 1
until i > 10
	puts i
	i += 1
end
