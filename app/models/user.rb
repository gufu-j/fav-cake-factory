class User < ApplicationRecord
    has_secure_password

    validates :username, :password, :password_confirmation, presence: true


    has_many :reviews
    has_many :cakes, through: :reviews  
end
