class ToursController < ApplicationController

  protect_from_forgery

  def show
    render json: Tour.find(params[:id])
  end

  def create
    new_tour = Tour.new(params[:tour])

    installation_1 = Installation.create()
    installation_2 = Installation.create()

    if new_tour.save


      #loop for params grabbing id's
        new_tour.installations << installation_1 #Installation.find(:id etc)
      #end
      render json: new_tour
    else
      render json: {error: 'fuck, tour not saved'}
    end
  end

  # def save ## does both create and save for now...
  #   @tour = Tour.create
  #   @tour << params
  #   render "tours/#{@tour.id}"
  # end

end
