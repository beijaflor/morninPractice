#!/usr/bin/env ruby
# encoding: utf-8

class A
  def a; end
  def b; end

  private
  def c; end
  def d; end

  protected
  def e; end
end

class B
  def a; end
  def b; end
  def c; end
  def d; end
  def e; end

  public :b
  private :c, :d
  protected :e
end
