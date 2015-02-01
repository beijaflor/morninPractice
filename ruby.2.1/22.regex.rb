#!/usr/bin/env ruby
# encoding: utf-8

if ARGV[0] =~ Regexp.new(ARGV[1])
  puts "文字列 #{ARGV[0]} は 正規表現 #{ARGV[1]} とマッチします"
else
  puts "文字列 #{ARGV[0]} は 正規表現 #{ARGV[1]} とマッチしません"
end

