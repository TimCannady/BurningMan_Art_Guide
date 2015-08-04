class ToursController < ApplicationController

  protect_from_forgery

  def show
    render json: Tour.find(params[:id])
  end

  def create
    tour = Tour.new(params[:tour])

    installation_1 = Installation.create(
        installation_name: "tims installation",
        photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg/220px-Large_Siamese_cat_tosses_a_mouse.jpg"
      )
    installation_2 = Installation.create(
      installation_name: "tims installation",
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg/220px-Large_Siamese_cat_tosses_a_mouse.jpg"
      )
    installation_3 = Installation.create(
      installation_name: "tims installation",
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg/220px-Large_Siamese_cat_tosses_a_mouse.jpg"
      )
    installation_4 = Installation.create(
      installation_name: "tims installation",
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg/220px-Large_Siamese_cat_tosses_a_mouse.jpg"
      )

    if new_tour.save
      #loop for params grabbing id's
        new_tour.installations << installation_1 #Installation.find(:id etc)
        new_tour.installations << installation_2 #Installation.find(:id etc)
        new_tour.installations << installation_3 #Installation.find(:id etc)
        new_tour.installations << installation_4 #Installation.find(:id etc)
      #end

      tour_installations = new_tour.installations

      render json: {
        tour: new_tour,
        tour_installations: tour_installations
      }
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
