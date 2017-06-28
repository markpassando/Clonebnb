class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update]

  def index
    if review_params["room_id"]
      @reviews = Review.where(room_id: review_params["room_id"])
    else
      @reviews = Review.all
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.messages, status: 422
    end
  end

  def update
    # debugger
    @review = current_user.reviews.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:room_id, :rating, :body)
  end

end
