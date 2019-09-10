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

require 'test_helper'

class PlaylistTrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
