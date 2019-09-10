# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :bigint           not null, primary key
#  track_id    :integer
#  playlist_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistTrack < ApplicationRecord
    validates :track_id, :playlist_id, presence: true

    belongs_to :track
    belongs_to :playlist
end
