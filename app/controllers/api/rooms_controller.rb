class Api::RoomsController < ApplicationController
  def index
    rooms = params[:bounds] ? Room.in_bounds(params[:bounds]) : Room.all

    # debugger
    if (params[:minBeds] && params[:maxBeds])
      # debugger
      rooms = rooms.where(beds: (params[:minBeds]..params[:maxBeds]) )
    end

    @rooms = rooms

    render :index
  end

  def show
    @room = Room.find(params[:id])
    # @room = Room.find(params[:id]).includes(:reviews).order('reviews.created_at DESC')
    # one query
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      render :show
    else
      render json: @room.errors.full_messages, status: 422
    end
  end

  private
  def room_params
    params.require(:room).permit(:bounds, :host_id, :main_pic, :title, :address, :lat, :lng, :price, :num_guests,
    :bedrooms, :beds, :bathrooms, :description, :rules, :prop_type, :room_type,
    :wifi, :kitchen, :ac, :tv, :pets, :fireplace, :bathtub, :games,
    :minBeds, :maxBeds)
  end

end
