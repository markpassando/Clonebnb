json.extract! review, :id, :rating, :body, :room_id, :user_id, :created_at

json.set! :reviewer do
  json.username review.user.username
  json.avatar_url asset_path(review.user.avatar.url(:thumb))
end
