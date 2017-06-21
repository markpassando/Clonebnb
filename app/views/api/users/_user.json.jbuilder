json.extract! user, :id, :username
json.avatar_url asset_path(user.avatar.url)
