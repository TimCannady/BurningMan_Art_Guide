class ArtInstallation < ActiveRecord::Base

    attr_reader :content, :installation_name, :installation_description, :artist_name, :artist_location

    def initialize(options = {})
    @content = options.fetch(:content, "no content")

    @installation_name = options.fetch(:installation_name,"no installation name"),
    @installation_description = options.fetch(:installation_description,"no description"),
    @artist_name = options.fetch(:artist_name,"no name")
    @artist_location = options.fetch(:artist_location,"no location"),
    @url = options.fetch(:content,"no url"),
    @photo_url = options.fetch(:photo_url,"no photo"),
    @email = options.fetch(:email,"no email")
    @donate_link = options.fetch(:donate_link,"no donate button")
  end


end
