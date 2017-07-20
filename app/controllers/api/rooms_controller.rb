class Api::RoomsController < ApplicationController
  def index
    rooms = params[:bounds] ? Room.in_bounds(params[:bounds]).includes(:reviews) : Room.includes(:reviews).limit(12).order(:id)

    if (params[:minGuests])
      params[:minGuests] = "1" if params[:minGuests] == ""

      rooms = rooms.where("num_guests >= ?", params[:minGuests])
    end

    if (params[:minPrice] && params[:maxPrice])
      params[:minPrice] = "0" if params[:minPrice] == ""
      params[:maxPrice] = Room.maximum("price").to_s if params[:maxPrice] == ""
      # rooms = rooms.where(price: (params[:minPrice]..params[:maxPrice]) )

      rooms = rooms.where("price >= ? AND price <= ?", params[:minPrice], params[:maxPrice] )
    end


    @rooms = rooms

    render :index
  end

  def show
    @room = Room.includes(:reviews).find(params[:id])
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
    :minGuests)
  end

end
