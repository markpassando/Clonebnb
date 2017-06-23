class Api::TripsController < ApplicationController
  def index
      @trips = Trip.all
    render :index
  end

  def show
    @trip = Trip.find(params[:id])
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.user_id = current_user.id
    # debugger
    if @trip.save
      render :show
    else
      render json: @trip.errors.full_messages, status: 422
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
    render json: @trip
  end

  private
  def trip_params
    params.require(:trip).permit(:room_id, :status, :num_guests, :check_in, :check_out)
  end
end
