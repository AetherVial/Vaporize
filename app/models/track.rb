# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string
#  artist_id  :integer
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
    validates :title, :artist_id, :album_id, presence: true
    
    belongs_to :artist
    belongs_to :album

    has_one_attached :audio

    has_many :playlist_tracks

    has_many :playlists,
        through: :playlist_tracks,
        source: :playlist

end
