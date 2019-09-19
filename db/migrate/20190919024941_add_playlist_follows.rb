class AddPlaylistFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_follows do |t|
      t.integer :user_id
      t.integer :playlist_id

      t.timestamps
    end
    add_index :playlist_follows, :user_id
    add_index :playlist_follows, :playlist_id
  end
end
