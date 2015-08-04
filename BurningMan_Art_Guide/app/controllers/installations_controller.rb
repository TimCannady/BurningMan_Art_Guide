class InstallationsController < ApplicationController

  def index
    render json: Installation.all
  end

  def show
  end

end
