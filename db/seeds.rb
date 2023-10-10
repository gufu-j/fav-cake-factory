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

a = User.create(username: "Diego", password: "123", password_confirmation: "123")
b = User.create(username: "Ale", password: "123", password_confirmation: "123")
c = User.create(username: "Irving", password: "123", password_confirmation: "123")
d = User.create(username: "Jon", password: "123", password_confirmation: "123")
e = User.create(username: "Kenny", password: "123", password_confirmation: "123")
f = User.create(username: "Bella", password: "123", password_confirmation: "123")

cake_one = Cake.create(name: "Dark Moon Chocolate", type_of_cake: "Swiss", cake_image: " https://joyfoodsunshine.com/wp-content/uploads/2020/08/best-chocolate-cake-recipe-from-scratch-8.jpg ", location: "Bay Shore, Wall Street 2, NY 11606" )
cake_two = Cake.create(name: "Carrot Cake", type_of_cake: "British", cake_image: "https://sallysbakingaddiction.com/wp-content/uploads/2017/04/best-hummingbird-cake.jpg", location: "Huntintong, Pass Ave 189, NY 11721" )
cake_three = Cake.create(name: "Tiramisu", type_of_cake: "Italian", cake_image: "https://i.shgcdn.com/269063bf-d72d-41dd-b848-9b30657696e6/-/format/auto/-/preview/3000x3000/-/quality/lighter/", location: "Westberry, fifth av 89, NY 11514" )
cake_four = Cake.create(name: "Blue Vanilla", type_of_cake: "Salvadorean", cake_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzshnLAjRKMuXxxX8vq5Z7CL7BEq6xMA4-Cw&usqp=CAU", location: "1 ave Sur, San Francisco Gotera, El Salvador, 503" )
cake_five = Cake.create(name: "Carrot Cake", type_of_cake: "British", cake_image: "https://www.glorioustreats.com/wp-content/uploads/2014/05/best-carrot-cake-recipe-square.jpeg", location: "Westbabylon, Ave 5 189, NY 11704 " )
cake_six = Cake.create(name: "Chocolate Lava Cake", type_of_cake: "French", cake_image: "https://www.sixsistersstuff.com/wp-content/uploads/2011/12/Chilis-Molten-Hot-Lava-Cake-1-9410.jpg", location: "New York City, seven av 112, NY 1001" )




Review.create(user_id: a.id, cake_id: cake_one.id, review: "My top fav")
Review.create(user_id: b.id, cake_id: cake_two.id, review: "Delicious")
Review.create(user_id: c.id, cake_id: cake_three.id, review: "I would recommend it")
Review.create(user_id: d.id, cake_id: cake_four.id, review: "Nice to be honest")
Review.create(user_id: e.id, cake_id: cake_five.id, review: "Nice place to eat")
Review.create(user_id: f.id, cake_id: cake_six.id, review: "You will love it")


puts("done loading")

