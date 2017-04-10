class CreateNinjas < ActiveRecord::Migration
  def change
    create_table :ninjas do |t|
      t.references, :dojo_id
      t.string, :first_name
      t.string :last_name

      t.timestamps null: false
    end
  end
end
