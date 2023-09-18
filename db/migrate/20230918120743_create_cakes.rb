class CreateCakes < ActiveRecord::Migration[6.1]
  def change
    create_table :cakes do |t|
      t.string :name
      t.string :type_of_cake
      t.string :cake_image
      t.string :location

      t.timestamps
    end
  end
end
