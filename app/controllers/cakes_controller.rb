class CakesController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  skip_before_action :authorize, only: [:index, :show]


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


    def cCount
      cakes = Cake.all
      filtered_cakes = cakes.select {|cake| cake.type_of_cake.length > params[:num].to_i}

      if (filtered_cakes.length == 0)
        render json: {error: "sorry man"}
      else
        render json: filtered_cakes
      end


      # render json: cakes

    end



    private 

    def cake_params
       params.permit(:name, :type_of_cake, :cake_image, :location)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end



end
