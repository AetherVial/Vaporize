class AddIndicesToUsersAndPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :username
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :email
    add_index :users, :session_token

    add_index :playlists, :user_id
    add_index :playlists, :title
  end
end
