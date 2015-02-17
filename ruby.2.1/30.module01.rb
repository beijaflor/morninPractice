#!/usr/bin/env ruby
# encoding: utf-8

module Walkable
  def walk
    puts 'てちてち'
  end
end

class Rabbit
  include Walkable
end

class Duck
  include Walkable
end

class Hamster
  include Walkable
end

Rabbit.new.walk
Duck.new.walk
Hamster.new.walk
