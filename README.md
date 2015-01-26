daily(?) morning practice
==========

materials
-----

1. [若手エンジニア／初心者のためのRuby 2.1入門 - ＠IT](./ruby.2.1)
1. [Python入門 : 4日間コース社内トレーニング](http://www.slideshare.net/yuichi110/python-introduction-42659983)



environment
-----

1. rubocop
  - [bbatsov/rubocop](https://github.com/bbatsov/rubocop)
  - [Ruby - Rubocopを使ってコーディングルールへの準拠チェックを自動化 - Qiita](http://qiita.com/yaotti/items/4f69a145a22f9c8f8333)
  - [SublimeLinter/SublimeLinter-rubocop](https://github.com/SublimeLinter/SublimeLinter-rubocop)
  - 動かないときはsublimelinterをdebugモードにしてコンソールの情報を確認
  - 原因はgemのインストール場所がglobalではなかったため。
  - rvm gemset use globalをしてからインストールし直したら動いた
