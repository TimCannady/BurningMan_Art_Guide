class ArtCollection < ActiveRecord::Base

    attr_accessor :installations

    def initialize
      @installations = []
    end

    def query_all_installations(html_file) ## parse every installations
      html_file.search('.newitem').map
    end

    def installation_creator(html_file,art_collection) ## create an installation object for each art installation
      array_of_art = query_all_installations(html_file)
      array_of_art.each do |installation|
        content_hash = {
          # :content => installation,
          :installation_name => get_installation_name(installation),
          :installation_description => get_installation_description(installation),
          :artist_name => get_artist_name(installation),
          :artist_location => get_artist_location(installation),
          :url => get_url(installation),
          :photo_url => get_photo_url(installation),
          :email => get_email(installation),
          :donate_link => get_donate_link(installation)
        }
        art_collection.installations << ArtInstallation.new(content_hash)
      end
    end

    def get_installation_name(installation)
      name = installation.search('h3').first.attributes['id'].value
    end

    def get_installation_description(installation)
      if installation.search('.descr > p').children.first != nil
        installation.search('.descr > p').children.first.text
      end
    end

    def get_artist_name(installation)
      installation.search('.artist').text
    end

    def get_artist_location(installation)
      installation.search('.location').text
    end

    def get_url(installation)
      if installation.search('.url > a').first != nil
        installation.search('.url > a').first.attributes['href'].value
      end
    end

    def get_photo_url(installation)
      if installation.search('img').first != nil
        installation.search('img').first.attributes.first[1].value
      end
    end

    def get_email(installation)
      if installation.search('.email').first != nil
        installation.search('.email').first.children.text
      end
    end

    def get_donate_link(installation)
      if installation.search('.donation-link').first != nil
        installation.search('.donation-link').first.children.first.attributes['href'].value
      end
    end

  end
