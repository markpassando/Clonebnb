class Api::RoomsController < ApplicationController
  def index
    if params[:bounds]
      @rooms = Room.in_bounds(params[:bounds])
    else
      @rooms = Room.all
    end

    render :index
  end

  def show
    @room = Room.find(params[:id])
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
    :wifi, :kitchen, :ac, :tv)
  end

end
