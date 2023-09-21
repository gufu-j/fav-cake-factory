class CakesController < ApplicationController


    def index
        cakes = Cake.all 
        render json: cakes
    end

    def show
        cake = Cake.find_by(id: params[:id])
        if cake
            render json:cake
        else
            render json: {error: "Cake not found "}, status: :not_found 
        end
    end

end
