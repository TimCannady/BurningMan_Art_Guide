parsed_file = Nokogiri::HTML(File.open('lib/assets/installations.html'))

bm_2015_art_object = Collection.create

bm_2015_art_object.installation_creator(parsed_file,bm_2015_art_object)
