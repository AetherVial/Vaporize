# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string
#  artist_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :title, presence: true
    validates :artist_id, presence: true

    has_one_attached :photo

    has_many :tracks
    belongs_to :artist
end
