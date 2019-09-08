# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :title, presence: true

    belongs_to :user
end
