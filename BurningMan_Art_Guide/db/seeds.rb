parsed_file = Nokogiri::HTML(File.open('lib/assets/art_installations.html'))

bm_2015_art_object = ArtCollection.create

bm_2015_art_object.installation_creator(parsed_file,bm_2015_art_object)


#-------------- Driver Tests -----------------#

# bm_2015_art_object.installations.each do |installation|
#   puts
#   p installation.inspect
#   puts
# end

# bm_2015_art_object.installations.each do |installation|
#   puts "*****************"
#   p installation.installation_name
# end

# bm_2015_art_object.installations.each do |installation|
#   puts "*****************"
#   p installation.artist_name
# end

