class Dojo < ActiveRecord::Base
  has_many :ninjas, dependent: :destroy
  validates :name, :city, :state, presence: true
end
