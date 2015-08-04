class InstallationsController < ApplicationController

  def index
    installations = Installation.all
    if params[:installation_ids]
      installations = installations.where(id: params[:installation_ids])
    end
    render json: installations
  end

  def show
  end

end
