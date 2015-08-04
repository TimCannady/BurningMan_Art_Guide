class Tour < ActiveRecord::Base

  has_many :tour_installations
  has_many :installations, through: :tour_installations

  def as_json(options=nil)
    super(methods:[:installation_ids])
  end
end
