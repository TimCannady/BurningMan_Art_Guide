class CreateArtCollections < ActiveRecord::Migration
  def change
    create_table :art_collections do |t|

      t.timestamps null: false
    end
  end
end
