class ToursController < ApplicationController

  protect_from_forgery

  def show
    render json: Tour.find(params[:id])
  end

  def create
    tour = Tour.new(tour_params)
    if tour.save
      render json: tour.as_json(methods:[:installation_ids])
    else
      render json: {error: tour.errors.full_messages.join(','), status: 400}
    end
  end





  # def save ## does both create and save for now...
  #   @tour = Tour.create
  #   @tour << params
  #   render "tours/#{@tour.id}"
  # end
  private

  def tour_params
    params.require(:tour).permit(:installation_ids)
  end
end
