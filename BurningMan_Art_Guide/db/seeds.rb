parsed_file = Nokogiri::HTML(File.open('art_installations.html'))

bm_2015_art_object = ArtCollection.new

bm_2015_art_object.installation_creator(parsed_file,bm_2015_art_object)

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

