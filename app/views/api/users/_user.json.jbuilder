json.extract! user, :id, :username
json.avatar_url asset_path(user.avatar.url(:thumb))
# json.reviews user.reviews.map{ |review| review.id }
