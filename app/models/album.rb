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

    belongs_to :artist
end
