class ArtInstallationsController < ApplicationController

  def index
    @art_installations = ArtInstallation.all
    render 'art_installations/index'
      # render json: @art_installations
  end

  def show
  end

end
