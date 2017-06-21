class AddRoomCols < ActiveRecord::Migration
  def change
    add_column :rooms, :bathrooms, :integer, null: false
    add_column :rooms, :lat, :float, null: false
    add_column :rooms, :lng, :float, null: false
  end
end
