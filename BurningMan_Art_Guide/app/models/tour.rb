class Tour < ActiveRecord::Base

  has_many :tours_installations
  has_many :installations, through: :tours_installations
end
