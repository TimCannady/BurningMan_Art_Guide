class InstallationsController < ApplicationController

  def index
    @art_installations = Installation.all
    @art_installations = Installation.all
    render 'installations/index'
    # render json: @art_installations
  end

  def show
  end

end
