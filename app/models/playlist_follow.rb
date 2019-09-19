# == Schema Information
#
# Table name: playlist_follows
#
#  id          :bigint           not null, primary key
#  user_id     :integer
#  playlist_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ApplicationRecord
    validates :user_id, :playlist_id, presence: true

    belongs_to :user
    belongs_to :playlist
end
