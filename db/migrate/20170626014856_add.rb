class Add < ActiveRecord::Migration
  def change
    add_column :rooms, :pets, :boolean, default: false
    add_column :rooms, :fireplace, :boolean, default: false
    add_column :rooms, :bathtub, :boolean, default: false
    add_column :rooms, :games, :boolean, default: false
  end
end
