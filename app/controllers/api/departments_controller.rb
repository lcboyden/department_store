class Api::DepartmentsController < ApplicationController
  def index
    render json: Department.all 
  end

  def show
    department = Department.find(params[:id])
    render json: department
  end
end
