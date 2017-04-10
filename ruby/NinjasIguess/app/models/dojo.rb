class Dojo < ActiveRecord::Base
  validates :name, :city, :state, presence: true
end
