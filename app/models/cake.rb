class Cake < ApplicationRecord

    validates :name, presence: true
    validates :type_of_cake, presence: true
    validates :cake_image, presence: true
    validates :location, presence: true




    has_many :reviews
    has_many :users, through: :reviews
end
