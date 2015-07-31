class ArtInstallationsController < ApplicationController

  def index
    @art_installations = ArtInstallation.all
    render 'art_installations/index'
  end

  def show
  end

end
