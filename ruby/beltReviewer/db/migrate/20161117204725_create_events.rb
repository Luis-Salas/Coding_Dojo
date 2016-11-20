class CreateEvents < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :location
      t.string :password
      t.string :password_confirmation
      t.timestamps null: false
    end
end
