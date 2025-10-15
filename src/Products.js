 const products = [
    // Home & Kitchen
    {
      name: 'Blender',
      img: 'https://westinghousesmallappliances.com.au/cdn/shop/files/Westinghouse_Blender_800W_Turn_Dial_Control_1.8L_Glass_Jug_-_-_-885087.jpg?v=1741662896',
      rating: 5,
      category: 'Home & Kitchen',
      cost: 2499,
      description: 'Powerful 800W blender with 1.8L glass jug, perfect for smoothies, shakes, and more. Durable, easy to clean, and stylish for any kitchen.'
    },
    {
      name: 'Coffee Maker',
      img: 'https://media.istockphoto.com/id/524908249/photo/coffee-blender-and-boiler-machine-in-kitchen-interior.jpg?s=612x612&w=0&k=20&c=0JWEuctoshrvOj-tRACbLqZH5wicdT9xOCe7zeEULYs=',
      rating: 4,
      category: 'Home & Kitchen',
      cost: 3499,
      description: 'Brew delicious coffee with this easy-to-use coffee maker. Features a modern design, quick brewing, and easy cleaning.'
    },
    {
      name: 'Cookware Set',
      img: 'https://media.istockphoto.com/id/1223414833/photo/clean-saucepan-on-a-gas-stove-in-kitchen.jpg?s=612x612&w=0&k=20&c=U1L33o9BH9qXtfexlWleX0Y5qGy4es0ySk1Drgq_oxk=',
      rating: 3,
      category: 'Home & Kitchen',
      cost: 1599,
      description: 'Durable non-stick cookware set for all your cooking needs. Includes multiple pots and pans for versatile use.'
    },
    {
      name: 'Vacuum Cleaner',
      img: 'https://media3.bosch-home.com/Images/600x/19742140_Bosch-vacuum-cleaner-WetDry-900x980.jpg',
      rating: 4,
      category: 'Home & Kitchen',
      cost: 4999,
      description: 'High-suction vacuum cleaner for deep cleaning carpets and floors. Lightweight and easy to maneuver.'
    },
    {
      name: 'Toaster',
      img: 'https://plus.unsplash.com/premium_photo-1718559007272-26a72b83fdcc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9hc3RlcnxlbnwwfHwwfHx8MA%3D%3D',
      rating: 2,
      category: 'Home & Kitchen',
      cost: 899,
      description: 'Compact toaster with adjustable browning control. Perfect for quick and easy breakfasts.'
    },
    {
      name: 'Air Fryer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8auBOHm7ZRpntp6kCbtnYxHhO3HyWv6XzA&s',
      rating: 5,
      category: 'Home & Kitchen',
      cost: 3999,
      description: 'Healthy air fryer for oil-free cooking. Crispy results with less fat and easy cleaning.'
    },
    {
      name: 'Water Purifier',
      img: 'https://www.aosmithindia.com/wp-content/themes/aosmith/assets/images/P4.jpg',
      rating: 3,
      category: 'Home & Kitchen',
      cost: 5999,
      description: 'Advanced water purifier for clean and safe drinking water. Easy installation and maintenance.'
    },
    {
      name: 'Microwave Oven',
      img: 'https://www.livemint.com/lm-img/img/2025/06/06/optimize/best_microwave_oven_1749197297938_1749197310681.png',
      rating: 4,
      category: 'Home & Kitchen',
      cost: 7499,
      description: 'Efficient microwave oven for fast heating and cooking. Multiple modes and easy controls.'
    },
    {
      name: 'Refrigerator',
      img: 'https://media.istockphoto.com/id/842160124/photo/refrigerator-with-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=j0W4TPOevBpp3mS6_X2FHV1uWVl3fcfdGAt2X3l8XzE=',
      rating: 5,
      category: 'Home & Kitchen',
      cost: 15999,
      description: 'Spacious refrigerator with fast cooling and energy efficiency. Keeps food fresh for longer.'
    },
    {
      name: 'Rice Cooker',
      img: 'https://www.shutterstock.com/image-photo/woman-preparing-rice-multi-cooker-260nw-2035376051.jpg',
      rating: 2,
      category: 'Home & Kitchen',
      cost: 1299,
      description: 'Automatic rice cooker for perfectly cooked rice every time. Simple operation and easy cleaning.'
    },
    // Electronics
    {
      name: 'Smartphone',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  rating: 5,
  category: 'Electronics',
  cost: 24999,
  description: 'Experience immersive entertainment and productivity with this high-performance TV. Crystal-clear display and smart features.'
    },
    {
  name: 'Laptop',
  img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  rating: 4,
  category: 'Electronics',
  cost: 49999,
  description: 'Powerful laptop for work and play. Sleek design, fast processor, and long battery life.'
    },
    {
  name: 'Bluetooth Speaker',
  img: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
  rating: 3,
  category: 'Electronics',
  cost: 1999,
  description: 'Portable Bluetooth speaker with deep bass and clear sound. Perfect for parties and travel.'
    },
    {
  name: 'Smartwatch',
  img: 'https://cdn.mos.cms.futurecdn.net/FkGweMeB7hdPgaSFQdgsfj.jpg',
  rating: 4,
  category: 'Electronics',
  cost: 5999,
  description: 'Stay connected and track your fitness with this stylish smartwatch. Multiple health features.'
    },
    {
  name: 'Wireless Earbuds',
  img: 'https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669',
  rating: 5,
  category: 'Electronics',
  cost: 2499,
  description: 'True wireless earbuds with noise cancellation and long battery life. Comfortable fit.'
    },
    {
  name: 'Tablet',
  img: 'https://media.istockphoto.com/id/1323520324/photo/the-ipad-air.jpg?s=612x612&w=0&k=20&c=mGHQri1_QhihJKakY9xSPESBAmsojOtg-JjlH2SNgWs=',
  rating: 3,
  category: 'Electronics',
  cost: 17999,
  description: 'Lightweight tablet for entertainment and productivity. Crisp display and fast performance.'
    },
    {
  name: 'Gaming Console',
  img: 'https://5.imimg.com/data5/SELLER/Default/2023/8/338900660/MI/FV/IV/195687344/gaming-console.jpg',
  rating: 4,
  category: 'Electronics',
  cost: 29999,
  description: 'Next-gen gaming console for immersive gameplay. Stunning graphics and fast loading.'
    },
    {
  name: 'DSLR Camera',
  img: 'https://img.freepik.com/free-photo/photo-camera-still-life_23-2150630950.jpg?semt=ais_hybrid&w=740&q=80',
  rating: 5,
  category: 'Electronics',
  cost: 39999,
  description: 'Capture stunning photos and videos with this high-resolution DSLR camera. Multiple shooting modes.'
    },
    {
  name: 'Monitor',
  img: 'https://cdn.thewirecutter.com/wp-content/media/2024/09/27inchmonitor-2048px-DSF4695.jpg',
  rating: 4,
  category: 'Electronics',
  cost: 10999,
  description: 'Full HD monitor with vibrant colors and wide viewing angles. Ideal for work and gaming.'
    },
    {
  name: 'Power Bank',
  img: 'https://img.freepik.com/free-vector/powerbank-battery-charger-realistic-icons-set-with-black-silver-devices-isolated-vector-illustration_1284-81780.jpg',
  rating: 2,
  category: 'Electronics',
  cost: 999,
  description: 'Portable power bank for charging devices on the go. Compact design and fast charging.'
    },
        // Beauty & Personal Care
    {
      name: 'Face Wash',
      img: 'https://images.unsplash.com/photo-1653919198052-546d44e2458e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXdhc2h8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
  rating: 4,
  category: 'Beauty & Personal Care',
  cost: 299,
  description: 'Gentle face wash for daily cleansing. Removes dirt and oil, leaving skin fresh and soft.'
    },
    {
  name: 'Shampoo',
  img: 'https://media.istockphoto.com/id/1160717395/photo/plastic-bottles-of-body-care-and-beauty-products.jpg?s=612x612&w=0&k=20&c=e97i-dT4HtwhOCrLgkGdiUw8kFcX9uGWOj18Y--ATFk=',
  rating: 5,
  category: 'Beauty & Personal Care',
  cost: 399,
  description: 'Nourishing shampoo for strong, shiny hair. Suitable for all hair types.'
    },
    {
  name: 'Conditioner',
  img: 'https://www.tresemme.in/cdn/shop/files/11876_S9-8909106001466_31696d20-116f-4ee8-a21f-537fa865b18e.jpg?v=1718097374',
  rating: 4,
  category: 'Beauty & Personal Care',
  cost: 349,
  description: 'Moisturizing conditioner for smooth and manageable hair. Reduces frizz and adds shine.'
    },
    {
  name: 'Body Lotion',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScByyHD8FhUSrEt9ceo9N6VxoAnUCyX63ORQ&s',
  rating: 3,
  category: 'Beauty & Personal Care',
  cost: 299,
  description: 'Hydrating body lotion for soft and smooth skin. Absorbs quickly and lasts all day.'
    },
    {
  name: 'Sunscreen',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPm1OMxDkUWwVU9mw87-mJwUhuc-Kbw1M9w&s',
  rating: 3,
  category: 'Beauty & Personal Care',
  cost: 499,
  description: 'Broad-spectrum sunscreen for effective sun protection. Lightweight and non-greasy.'
    },
    {
  name: 'Lip Balm',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1GcdhGiQSnr-Xy2qhcJFLFiLodGH2sHYfQ&s',
  rating: 5,
  category: 'Beauty & Personal Care',
  cost: 199,
  description: 'Moisturizing lip balm for soft, healthy lips. Protects against dryness and chapping.'
    },
    {
  name: 'Face Cream',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDxDICOxrRkqjFBxDNCR3gGUsGBIS2FaADw&s',
  rating: 4,
  category: 'Beauty & Personal Care',
  cost: 399,
  description: 'Nourishing face cream for radiant skin. Provides deep hydration and improves texture.'
    },
    {
  name: 'Hand Sanitizer',
  img: 'https://m.media-amazon.com/images/I/812CzgURWhL._UF1000,1000_QL80_.jpg',
  rating: 3,
  category: 'Beauty & Personal Care',
  cost: 149,
  description: 'Instant hand sanitizer kills germs and bacteria. Convenient for on-the-go protection.'
    },
    {
  name: 'Perfume',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BQ80cTtxLGh8dfnUZWkC4KwLdGeSPV2g6A&s',
  rating: 4,
  category: 'Beauty & Personal Care',
  cost: 799,
  description: 'Long-lasting perfume with a refreshing fragrance. Perfect for daily wear and special occasions.'
    },
    {
  name: 'Hair Oil',
  img: 'https://images.unsplash.com/photo-1699373381616-6133334e754e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D',
  rating: 3,
  category: 'Beauty & Personal Care',
  cost: 249,
  description: 'Nourishing hair oil for strong and shiny hair. Reduces hair fall and promotes growth.'
    },
    // Fashion & Apparel
    {
      name: 'T-Shirt',
      img: 'https://fastcolors.in/cdn/shop/files/0588-40022-OEBLACKBACK.jpg?v=1737204132&width=2048',
  rating: 5,
  category: 'Fashion & Apparel',
  cost: 599,
  description: 'Classic t-shirt made from soft, breathable fabric. Perfect for everyday comfort and style.'
    },
    {
  name: 'Jeans',
  img: 'https://m.media-amazon.com/images/I/91E69wClQ4L._UY1100_.jpg',
  rating: 4,
  category: 'Fashion & Apparel',
  cost: 1299,
  description: 'Stylish denim jeans with a comfortable fit. Durable and versatile for any occasion.'
    },
    {
  name: 'Sneakers',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ns2it1GR8XbMwrxhNvakcJlv2RvmmAlJCQ&s',
  rating: 5,
  category: 'Fashion & Apparel',
  cost: 2499,
  description: 'Trendy sneakers with cushioned soles for all-day comfort. Great for casual and sporty looks.'
    },
    {
  name: 'Sandals',
  img: 'https://m.media-amazon.com/images/I/71eCEjZLtfL._UY1000_.jpg',
  rating: 4,
  category: 'Fashion & Apparel',
  cost: 799,
  description: 'Comfortable sandals with adjustable straps. Perfect for summer outings and daily wear.'
    },
    {
  name: 'Jacket',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WaO2JcMJVSqCnHUZL3SvOmRspAAkVUKybA&s',
  rating: 3,
  category: 'Fashion & Apparel',
  cost: 1999,
  description: 'Warm and stylish jacket for chilly days. Features a modern cut and durable material.'
    },
    {
  name: 'Handbag',
  img: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/34118613/2025/6/28/310fc52e-7984-4224-bdcd-3f828ac9b6f01751115698925-Exotic-Oversized-Structured-Handheld-Bag-9231751115698347-1.jpg',
  rating: 4,
  category: 'Fashion & Apparel',
  cost: 1499,
  description: 'Elegant handbag with spacious compartments. Perfect for work, travel, or daily use.'
    },
    {
  name: 'Sunglasses',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xw8pDT2afNl02a-0Lz6OFBLVD8ed1uq1MQ&s',
  rating: 5,
  category: 'Fashion & Apparel',
  cost: 999,
  description: 'Stylish sunglasses with UV protection. Enhance your look while protecting your eyes.'
    },
    {
  name: 'Watch',
  img: 'https://m.media-amazon.com/images/I/61n0aVXta7L._UY1000_.jpg',
  rating: 4,
  category: 'Fashion & Apparel',
  cost: 1999,
  description: 'Classic wristwatch with a sleek design. Reliable timekeeping for any occasion.'
    },
    {
  name: 'Hat',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFxwH3YkgvckFIZ_ru7A5Fq0jQ9Mx-BYxlA&s',
  rating: 2,
  category: 'Fashion & Apparel',
  cost: 399,
  description: 'Lightweight hat for sun protection and style. Great for outdoor activities.'
    },
    {
  name: 'Scarf',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbqG8im0qNyEA9Oj1Q3aDlgEC6pDwaol5Og&s',
  rating: 3,
  category: 'Fashion & Apparel',
  cost: 499,
  description: 'Soft and cozy scarf for warmth and style. Versatile accessory for any outfit.'
    },
    // Books & Stationery
    {
      name: 'Notebook',
      img: 'https://t4.ftcdn.net/jpg/01/82/56/91/360_F_182569147_K4Odkrm43ZXFzh2pnuxrJPemYJ2ZdSdo.jpg',
  rating: 4,
  category: 'Books & Stationery',
  cost: 99,
  description: 'Ruled notebook for school, office, or personal use. High-quality paper and durable binding.'
    },
    {
  name: 'Ball Pen',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPPkSc5TtLtiwh4m8KbRT7no9MZdI5KQ3pA&s',
  rating: 3,
  category: 'Books & Stationery',
  cost: 20,
  description: 'Smooth writing ball pen with comfortable grip. Ideal for everyday writing tasks.'
    },
    {
  name: 'Textbook',
  img: 'https://www.shutterstock.com/image-illustration/stack-textbooks-isolated-on-white-260nw-83105218.jpg',
  rating: 4,
  category: 'Books & Stationery',
  cost: 499,
  description: 'Comprehensive textbook for academic learning. Covers key concepts and exercises.'
    },
    {
  name: 'Sketchbook',
  img: 'https://m.media-amazon.com/images/I/71EHztm6qlL._UF894,1000_QL80_.jpg',
  rating: 3,
  category: 'Books & Stationery',
  cost: 199,
  description: 'Premium sketchbook for artists and designers. Thick pages for drawing and sketching.'
    },
    {
  name: 'Highlighter',
  img: 'https://m.media-amazon.com/images/I/51mrFKSi+zL._UF1000,1000_QL80_.jpg',
  rating: 4,
  category: 'Books & Stationery',
  cost: 49,
  description: 'Bright highlighter for marking important notes. Smudge-proof and long-lasting.'
    },
    {
  name: 'Stapler',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxVteO03bF_RlBPe19GVzctwo8EPP5UyrCg&s',
  rating: 3,
  category: 'Books & Stationery',
  cost: 99,
  description: 'Reliable stapler for binding papers. Compact design and easy to use.'
    },
    {
  name: 'Calculator',
  img: 'https://cdn.pixabay.com/photo/2016/07/14/15/01/calculator-1516869_640.jpg',
  rating: 4,
  category: 'Books & Stationery',
  cost: 299,
  description: 'Portable calculator for quick and accurate calculations. Large display and easy buttons.'
    },
    {
  name: 'Diary',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGpcT9UzRzz179JKM86dFFPs_jYEST_eTzQ&s',
  rating: 2,
  category: 'Books & Stationery',
  cost: 149,
  description: 'Personal diary for notes, journaling, and planning. Elegant cover and quality pages.'
    },
    {
  name: 'Sticky Notes',
  img: 'https://m.media-amazon.com/images/I/71spLX1XYBL.jpg',
  rating: 4,
  category: 'Books & Stationery',
  cost: 59,
  description: 'Colorful sticky notes for reminders and organization. Easy to stick and remove.'
    },
    {
  name: 'Bookmark',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tBxbEWxna2kkNVaugexqW6_8J2SeyGGW5w&s',
  rating: 3,
  category: 'Books & Stationery',
  cost: 19,
  description: 'Creative bookmark to keep your place in books. Durable and stylish design.'
    },
        // Sports & Outdoors
    {
      name: 'Football',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYo2g4H6hBdc3Hgz0BQiSjYJVRTclj7mX2ZQ&s',
  rating: 4,
  category: 'Sports & Outdoors',
  cost: 499,
  description: 'Durable football for outdoor play. Great grip and bounce for matches and practice.'
    },
    {
  name: 'Tennis Racket',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrmIQJoo2LZlx4NTXWFqmV19NLwtbd0rkTQ&s',
  rating: 5,
  category: 'Sports & Outdoors',
  cost: 1499,
  description: 'Lightweight tennis racket for powerful shots and control. Suitable for all skill levels.'
    },
    {
  name: 'Yoga Mat',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6973qDH7i99jbEFz2SfsOqVWiTuJO7SUoQ&s',
  rating: 3,
  category: 'Sports & Outdoors',
  cost: 399,
  description: 'Non-slip yoga mat for comfort and stability. Ideal for yoga, pilates, and stretching.'
    },
    {
  name: 'Dumbbells',
  img: 'https://www.shutterstock.com/image-photo/dumbells-on-floor-gym-260nw-771217471.jpg',
  rating: 2,
  category: 'Sports & Outdoors',
  cost: 799,
  description: 'Set of dumbbells for strength training. Easy to grip and suitable for home workouts.'
    },
    {
  name: 'Bicycle',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE9l1S9jsGvBOEBARUAm1mZbgfGgRQp4NEg&s',
  rating: 4,
  category: 'Sports & Outdoors',
  cost: 5999,
  description: 'Sturdy bicycle for city and trail rides. Smooth gears and comfortable seat.'
    },
    {
  name: 'Running Shoes',
  img: 'https://media.istockphoto.com/id/493911186/photo/jogging.jpg?s=612x612&w=0&k=20&c=ocAmyxEQ6b3KG8FQBXkfbYOr7BK_YLKWVzo7eJbKllo=',
  rating: 5,
  category: 'Sports & Outdoors',
  cost: 2499,
  description: 'Lightweight running shoes with cushioned soles. Designed for speed and comfort.'
    },
    {
  name: 'Camping Tent',
  img: 'https://img.freepik.com/free-vector/classic-camping-tent-illustration_1308-162447.jpg?semt=ais_hybrid&w=740&q=80',
  rating: 2,
  category: 'Sports & Outdoors',
  cost: 1999,
  description: 'Spacious camping tent for outdoor adventures. Easy to set up and weather-resistant.'
    },
    {
  name: 'Water Bottle',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzU0xTVNQ8TR3BMCWUMmb17sdDN96qGwmTw&s',
  rating: 3,
  category: 'Sports & Outdoors',
  cost: 199,
  description: 'Leak-proof water bottle for hydration on the go. Lightweight and easy to carry.'
    },
    {
  name: 'Sports Watch',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXshcD93ICqd9XOVPZ4kTip8FNIlwF49c0g&s',
  rating: 4,
  category: 'Sports & Outdoors',
  cost: 1499,
  description: 'Multi-function sports watch with stopwatch and water resistance. Perfect for athletes.'
    },
    {
  name: 'Golf Clubs',
  img: 'https://blog.skillest.com/wp-content/uploads/2025/02/Understanding-the-Basics-of-Golf-Clubs.jpg',
  rating: 5,
  category: 'Sports & Outdoors',
  cost: 4999,
  description: 'Premium golf clubs for precision and power. Ideal for beginners and pros alike.'
    },
  ];

export default products;