class CakeSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :type_of_cake, :cake_image, :location

  has_many :users, through: :reviews
  has_many :reviews
end
