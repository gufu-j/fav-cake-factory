class CakeSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :type_of_cake, :cake_image, :location, :location

  has_many :users
end
