class Client < ActiveRecord::Base
  validates :subdomain, presence: true
end