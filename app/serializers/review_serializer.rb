class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :user_id, :cake_id, :review, :username

  def username
    object.user.username
  end

  def cake_name
    object.cake.name
  end


end
