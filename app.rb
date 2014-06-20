require './thread-dumper.rb'
require 'sinatra'

# set :bind, "www.seanandmallory.com"

get '/' do
  erb :home
end

get '/index' do
  erb :index2, :layout => :classy
end

get '/demo' do
	erb :demo, :layout => :classy
end	

get '/sandbox' do
	erb :sandy, :layout => :sandbox
end