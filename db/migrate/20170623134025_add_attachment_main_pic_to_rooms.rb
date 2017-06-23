class AddAttachmentMainPicToRooms < ActiveRecord::Migration
  def self.up
    change_table :rooms do |t|
      t.attachment :main_pic
    end
  end

  def self.down
    remove_attachment :rooms, :main_pic
  end
end
