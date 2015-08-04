class TourInstallation < ActiveRecord::Base
  belongs_to :tour
  belongs_to :installation
end
