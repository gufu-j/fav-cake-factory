class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    skip_before_action :authorize, only: [:index, :show]

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
       review = Review.find(params[:id])
       render json:review
    end

    # In create and update we are both reaching out the reviews by the users.

    def create 
        review =  @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = @current_user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review
    end


    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end


    private 

    def review_params
        params.permit(:review, :cake_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Review Not found"}, status: :not_found 
    end

end
