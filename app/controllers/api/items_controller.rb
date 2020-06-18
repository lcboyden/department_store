class Api::ItemsController < ApplicationController
  def index
    d = Department.find(params[:department_id])
    render json: d.items
  end
end
