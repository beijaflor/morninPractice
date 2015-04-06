#!/usr/bin/env ruby
# encoding: utf-8

def basic_form(a: 'a', b: ['b', 'c', 'd'], c: :c)
  puts "a(#{a.class}): #{a}"
  puts "b(#{b.class}): #{b}"
  puts "c(#{c.class}): #{c}"
end

def complex_form(a, *b, c: 'c', d:)
  puts "a(#{a.class}): #{a}"
  puts "b(#{b.class}): #{b}"
  puts "c(#{c.class}): #{c}"
  puts "d(#{d.class}): #{d}"
end

basic_form(a: 'meow', b: 'oink', c: :bowwow)
basic_form(a: 'meow')
complex_form("oink", "bowwow", d: "meow", c: "quack")
complex_form
