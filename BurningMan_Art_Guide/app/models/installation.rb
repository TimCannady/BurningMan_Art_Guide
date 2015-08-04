class Installation < ActiveRecord::Base
  has_many :tour_installations
  has_many :tours, through: :tour_installations
end
