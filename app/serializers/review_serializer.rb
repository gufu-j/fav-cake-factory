class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :user_id, :cake_id, :review, :username, :created_at

  def username
    object.user.username
  end


end
