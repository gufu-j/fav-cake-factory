# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Cake.destroy_all
Review.destroy_all

puts("data deleted")

puts("loading data...")

a = User.create(username: "diego", password: "123")
b = User.create(username: "ale", password: "123")
c = User.create(username: "Irving", password: "123")

cake_one = Cake.create(name: "Torino", type_of_cake: "argentino", cake_image: " https://www.theflouredtable.com/wp-content/uploads/2022/03/Chocotorta-15.jpg ", location: "Buenos Aires, plaza delgado" )
cake_two = Cake.create(name: "Celestino", type_of_cake: "Italian", cake_image: "https://sugarspunrun.com/wp-content/uploads/2022/05/Italian-Cream-Cake-recipe-1-of-1.jpg", location: "Italia, Roma Santino Street" )
cake_three = Cake.create(name: "Canello", type_of_cake: "Tiramisu", cake_image: "https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg", location: "California, Wall Street" )

Review.create(user_id: a.id, cake_id: cake_one.id, review: "Muy rico")
Review.create(user_id: b.id, cake_id: cake_two.id, review: "Delicioso")
Review.create(user_id: c.id, cake_id: cake_three.id, review: "Very good one")



puts("done loading")