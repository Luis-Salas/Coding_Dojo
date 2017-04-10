class ProductController < ApplicationController
  def index
    @products = Product.all
  end

  def create
  end

  def show
    @product = Product.find(params[:id])
  end

  def new
    puts params
    product = Product.create(name: params[:name], description: params[:description], price: params[:price])
    redirect_to "/"
  end
  def delete
    Product.delete(params[:id])
    redirect_to "/"
  end
  def edit
    @product = Product.find(params[:id])
    render "edit"
  end
  def change
    puts params
    @edited = Product.update(params[:id],name: params[:name], description: params[:description], price: params[:price])
    redirect_to "/"
  end
end
