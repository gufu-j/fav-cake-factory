class Review < ApplicationRecord

    belongs_to :user
    belongs_to :cake

    validates :review, presence: true
    
end
