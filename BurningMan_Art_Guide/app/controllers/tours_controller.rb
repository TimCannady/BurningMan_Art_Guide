class ToursController < ApplicationController

  protect_from_forgery

  def show
  end

  # def create
  #   @tour = Tour.create
  # end

  def save ## does both create and save for now...
    @tour = Tour.create
    @tour << params
    render "tours/#{@tour.id}"
  end

end
