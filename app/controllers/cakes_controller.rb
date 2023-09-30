class CakesController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize
  skip_before_action :authorize, only: [:index, :show, :create]


    def index
        cakes = Cake.all 
        render json: cakes, status: :ok
    end

    def show
        cake = Cake.find_by(id: params[:id])
        if cake
            render json:cake
        else
            render json: {error: "Cake not found "}, status: :not_found 
        end
    end

    def create
      cake = Cake.create!(cake_params)
      render json: cake, status: :created
    end


    private 

    def cake_params
       params.permit(:name, :type_of_cake, :cake_image, :location)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end



end
