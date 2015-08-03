class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|

      t.timestamps null: false
    end
  end
end
