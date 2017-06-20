class Api::RoomsController < ApplicationController
  def index
    @rooms = Room.all
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
    params.require(:room).permit(:host_id, :title, :address, :price, :num_guests,
    :bedrooms, :beds, :description, :rules, :prop_type, :room_type,
    :wifi, :kitchen, :ac, :tv)
  end

end