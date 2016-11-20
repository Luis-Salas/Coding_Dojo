class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @show = Product.find(params[:id])
    @comment = Comment.where(product_id:params[:id])
  end

  def comment
    puts params[:id]
    Comment.create(comment:params[:comment], product_id:params[:id])
    redirect_to "/products/show/#{params[:id]}"
  end

  def new
    puts params[:category]

  end
  def create
    @product = Product.create(name:params[:name], description:params[:description], price:params[:price], category_id:params[:category])
    puts @products
    redirect_to "/"
  end
  def edit
    render "edit"
  end
  def update
    puts "______________________"
    category = Category.find(params[:category])
    Product.update(params[:id], name:params[:name], description:params[:description], price:params[:price], category: category)
    redirect_to "/"
  end
  def destroy
    Product.delete(params[:id])
    redirect_to "/"
  end
  def allComments
    @all = Comment.all()
    render "comments"
  end
end
