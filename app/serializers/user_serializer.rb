class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  # has_many :cakes
  # has_many :reviews

  # has_many :reviews

  has_many :cakes, through: :reviews

  
end

