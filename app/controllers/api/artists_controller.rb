class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render json:{
          artists: @artists
    }
      end
   
      def show
        @artist = Artist.find(params[:id])
        @songs = @artist.songs
        render json: {
          artist: @artist,
          songs: @songs
        }
      end

def create
    @artist = Artist.create!(artist_params)

    render json: @artist
  end

  def update
    @artist = Artist.find(params[:id])
    @artist.update!(artist_params)

    render json: @artist
  end


def destroy
    @artist = Artist.find(params[:id]).destroy
    render json: {
        message: "deleted artist successfully"
    }
end

private

  def artist_params
    params.require(:artist).permit(:name, :photo_url, :nationality)
  end

end
