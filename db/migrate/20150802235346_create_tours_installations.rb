class CreateToursInstallations < ActiveRecord::Migration
  def change
    create_table :tour_installations do |t|
      t.integer :tour_id
      t.integer :installation_id

      t.timestamps null: false
    end
  end
end
