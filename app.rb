require 'sinatra'

get '/' do
  "the time where this server lives is #{Time.now}
    <br /><br />check out your <a href=\"/agent\">user_agent</a>
    adding a comment as a test"
end

get '/agent' do
  "you're using #{request.user_agent}"
end