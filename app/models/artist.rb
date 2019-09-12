# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, presence: true

    has_many :albums
    has_many :tracks
end
