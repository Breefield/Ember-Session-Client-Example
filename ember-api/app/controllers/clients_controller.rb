class ClientsController < ApplicationController
  def index
    render json: {client: Client.find(1)}
  end

  def create
    @client = Client.new(resource_params)
    if @client.save
      render json: {client: @client}
    else
      render json: {client: {errors: @client.errors}}
    end
  end

  def resource_params
    params.require(:client).permit([:subdomain])
  end

  # def show
    # render json: {client: Client.find(params[:id])}
  # end
end