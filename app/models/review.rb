class Review < ApplicationRecord

    belongs_to :user
    belongs_to :cake

    validates :review, presence: true
    validates :user_id, uniqueness: {scope: :cake_id, message: "cannot add more than one review"}
end
