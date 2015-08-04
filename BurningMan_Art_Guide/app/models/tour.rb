class Tour < ActiveRecord::Base

  has_many :tour_installations
  has_many :installations, through: :tour_installations
end
