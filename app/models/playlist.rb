# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :title, presence: true
    belongs_to :user

    has_one_attached :photo
    
    has_many :playlist_tracks

    has_many :tracks,
        through: :playlist_tracks,
        source: :track
end
