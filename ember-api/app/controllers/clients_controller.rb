class ClientsController < ApplicationController
  def index
    render json: {client: Client.find(1)}
  end

  # def show
    # render json: {client: Client.find(params[:id])}
  # end
end