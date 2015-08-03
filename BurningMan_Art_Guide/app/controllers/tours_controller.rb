class ToursController < ApplicationController

  protect_from_forgery

  def show
  end

  def create
    render 'installations/index'
  end

end
