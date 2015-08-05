class ToursController < ApplicationController

  protect_from_forgery

  def show
    render json: Tour.find(params[:id])
  end

  def create
    tour = Tour.new(tour_params)
    if tour.save
      render json: tour
    else
      render json: {error: tour.errors.full_messages.join(','), status: 400}
    end
  end

  private

  def tour_params
    params.require(:tour).permit(
      installation_ids: []
    )
  end
end
