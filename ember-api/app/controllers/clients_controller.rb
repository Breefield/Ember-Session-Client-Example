class ClientsController < ApplicationController
  def index
    @clients = Client.all
    render json: @clients
  end

  def create
    @client = Client.new params[:client]
    if @client.save
      render json: @client
    else
      render json: {error: @client.errors}
    end
  end
end