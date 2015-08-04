class ToursController < ApplicationController

  protect_from_forgery

  def show
    render json: Tour.find(params[:id])
  end

  def create
    tour = Tour.new(params[:tour])
    if tour.save
      render json: tour
    else
      render json: {error: 'fuck'}
    end
  end

  # def save ## does both create and save for now...
  #   @tour = Tour.create
  #   @tour << params
  #   render "tours/#{@tour.id}"
  # end

end
