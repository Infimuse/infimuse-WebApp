const experiences = [
    {
      id: '1',
      image: 'https://images.pexels.com/photos/3026809/pexels-photo-3026809.jpeg',
      title: 'Bake Your Own French Croissant',
      host: 'Atelier Sucré',
      capacity: 20,
      ageGroup: '16+',
      price: '$95',
      venue: 'Atelier Sucré Kitchen',
      description: 'Learn the foundations of cake decorating and several piping techniques, including shells, stars, zig-zag, and rosettes. The first ½ of this lesson will concentrate on mastering basic skills and proper technique. The second part of the class will focus on applying the skills you learned to create a professional-looking textured buttercream cake. Filling, frosting, piping, we will do it all.',
      amenities: ['Ingredients Provided', 'Recipe Book', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Thu, May 30th, 4:30-7pm EDT', seatsLeft: 11 },
        { date: 'Sat, Jun 1st, 11am-1:30pm EDT', seatsLeft: 12 },
      ],
      reviews: 457,
      rating: 4.6,
      location: '118 W 22nd St, New York, NY',
      ageLimit: '12 and older',
      startDate: 'May 30th, 2023',
      time: '4:30-7pm EDT',
      avgSessionDuration: '2.5 hours',
      numOfClasses: 4,
      attending: 8,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/325680/pexels-photo-325680.jpeg',
      title: 'Tagliatelle al Pesto with an Italian Master Chef',
      host: 'CocuSocial Cooking Classes',
      capacity: 20,
      ageGroup: '16+',
      price: '$95',
      venue: 'CocuSocial Kitchen',
      description: 'Learn how to make traditional Tagliatelle al Pesto with an Italian Master Chef. This hands-on class will teach you the secrets of making the perfect pasta and pesto from scratch. Enjoy your creation with a glass of wine and good company.',
      amenities: ['Ingredients Provided', 'Recipe Book', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Fri, Jun 14th, 10am-1:30pm EDT', seatsLeft: 10 },
        { date: 'Fri, Jun 14th, 2-4:30pm EDT', seatsLeft: 12 },
      ],
      reviews: 320,
      rating: 4.7,
      location: '123 Main St, New York, NY',
      ageLimit: '12 and older',
      startDate: 'June 14th, 2023',
      time: '10:00 AM - 1:30 PM EDT',
      avgSessionDuration: '3.5 hours',
      numOfClasses: 2,
      attending: 15,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    // Sipping Hangouts
    {
      id: '10',
      image: 'https://images.pexels.com/photos/1473007/pexels-photo-1473007.jpeg',
      title: 'Wine Tasting',
      host: 'Vineyard',
      capacity: 25,
      ageGroup: '21+',
      price: '$50',
      venue: 'Vineyard Wine Cellar',
      description: 'Join us for an exclusive wine tasting event at our beautiful vineyard. Sample a variety of wines and learn about the winemaking process from our expert sommelier. Enjoy a guided tour of the vineyard and take home a complimentary bottle of wine.',
      amenities: ['Wine Samples', 'Cheese Pairing', 'Vineyard Tour'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Sat, Jun 15th, 2-5pm EDT', seatsLeft: 15 },
        { date: 'Sun, Jun 16th, 3-6pm EDT', seatsLeft: 10 },
      ],
      reviews: 210,
      rating: 4.8,
      location: '456 Vineyard Rd, Napa Valley, CA',
      ageLimit: '21 and older',
      startDate: 'June 15th, 2023',
      time: '2:00 PM - 5:00 PM EDT',
      avgSessionDuration: '3 hours',
      numOfClasses: 2,
      attending: 20,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/77.jpg',
    },
    // Kids Activities
    {
      id: '11',
      image: 'https://images.pexels.com/photos/3026809/pexels-photo-3026809.jpeg',
      title: 'Kids Cooking Class',
      host: 'Cooking School',
      capacity: 15,
      ageGroup: '5-12',
      price: '$30',
      venue: 'Local Community Center',
      description: 'A fun and interactive cooking class designed for kids aged 5-12. Your little ones will learn basic cooking skills and create delicious dishes they can enjoy. All ingredients and materials are provided, and each child will receive a certificate of completion.',
      amenities: ['Ingredients Provided', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Wed, Jun 12th, 10am-12pm EDT', seatsLeft: 5 },
        { date: 'Thu, Jun 13th, 11am-1pm EDT', seatsLeft: 8 },
      ],
      reviews: 150,
      rating: 4.5,
      location: '789 Community Dr, Brooklyn, NY',
      ageLimit: '5-12',
      startDate: 'June 12th, 2023',
      time: '10:00 AM - 12:00 PM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 10,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    // Workshops
    {
      id: '12',
      image: 'https://images.pexels.com/photos/1799344/pexels-photo-1799344.jpeg',
      title: 'Photography Workshop',
      host: 'Photo Studio',
      capacity: 20,
      ageGroup: '16+',
      price: '$80',
      venue: 'Photo Studio Downtown',
      description: 'Join our Photography Workshop and learn the art of capturing stunning images. Our expert photographer will guide you through various techniques and tips for both indoor and outdoor photography. Bring your own camera or use one of ours. Beginners are welcome.',
      amenities: ['Camera Provided', 'Workshop Material', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Sat, Jun 22nd, 10am-1pm EDT', seatsLeft: 8  },
        { date: 'Sun, Jun 23rd, 2-5pm EDT', seatsLeft: 12 },
      ],
      reviews: 180,
      rating: 4.9,
      location: '234 Photo Blvd, New York, NY',
      ageLimit: '16 and older',
      startDate: 'June 22nd, 2023',
      time: '10:00 AM - 1:00 PM EDT',
      avgSessionDuration: '3 hours',
      numOfClasses: 2,
      attending: 10,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/women/66.jpg',
    },
    {
      id: '18',
      image: 'https://images.pexels.com/photos/3787329/pexels-photo-3787329.jpeg',
      title: 'Digital Marketing Workshop',
      host: 'Marketing Experts',
      capacity: 25,
      ageGroup: '18+',
      price: '$90',
      venue: 'Tech Hub',
      description: 'Learn the latest trends and strategies in digital marketing. This workshop covers SEO, social media marketing, and email campaigns. Perfect for entrepreneurs and marketing professionals looking to expand their skills.',
      amenities: ['Workshop Material', 'Lunch Provided', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Mon, Jul 1st, 9am-4pm EDT', seatsLeft: 15 },
        { date: 'Tue, Jul 2nd, 9am-4pm EDT', seatsLeft: 18 },
      ],
      reviews: 230,
      rating: 4.8,
      location: '567 Marketing St, San Francisco, CA',
      ageLimit: '18 and older',
      startDate: 'July 1st, 2023',
      time: '9:00 AM - 4:00 PM EDT',
      avgSessionDuration: '7 hours',
      numOfClasses: 2,
      attending: 20,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
    {
      id: '19',
      image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg',
      title: 'Creative Writing Workshop',
      host: 'Writers Guild',
      capacity: 15,
      ageGroup: '18+',
      price: '$70',
      venue: 'Local Library',
      description: 'Unleash your creativity with our Creative Writing Workshop. Learn to craft compelling stories and improve your writing skills. Ideal for aspiring writers and those looking to enhance their storytelling abilities.',
      amenities: ['Writing Materials', 'Workshop Guide', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Wed, Jul 10th, 1pm-4pm EDT', seatsLeft: 7 },
        { date: 'Thu, Jul 11th, 2pm-5pm EDT', seatsLeft: 10 },
      ],
      reviews: 170,
      rating: 4.7,
      location: '890 Library Ln, Boston, MA',
      ageLimit: '18 and older',
      startDate: 'July 10th, 2023',
      time: '1:00 PM - 4:00 PM EDT',
      avgSessionDuration: '3 hours',
      numOfClasses: 2,
      attending: 12,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/women/67.jpg',
    },
    {
      id: '31',
      image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg',
      title: 'Public Speaking Workshop',
      host: 'Oratory Experts',
      capacity: 20,
      ageGroup: '16+',
      price: '$75',
      venue: 'City Hall',
      description: 'Build confidence and improve your public speaking skills with our intensive workshop. Learn techniques for effective communication, speech writing, and presentation delivery. Ideal for professionals and students.',
      amenities: ['Workshop Material', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Fri, Jul 12th, 10am-1pm EDT', seatsLeft: 12 },
        { date: 'Sat, Jul 13th, 2pm-5pm EDT', seatsLeft: 14 },
      ],
      reviews: 150,
      rating: 4.6,
      location: '123 Civic Center, Chicago, IL',
      ageLimit: '16 and older',
      startDate: 'July 12th, 2023',
      time: '10:00 AM - 1:00 PM EDT',
      avgSessionDuration: '3 hours',
      numOfClasses: 2,
      attending: 18,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/79.jpg',
    },
    {
      id: '32',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg',
      title: 'Painting Workshop',
      host: 'Artistic Souls',
      capacity: 15,
      ageGroup: '18+',
      price: '$85',
      venue: 'Art Gallery',
      description: 'Discover the joy of painting with our hands-on workshop. Learn various painting techniques and create your own masterpiece. All materials provided, and no prior experience necessary.',
      amenities: ['Painting Supplies', 'Workshop Guide', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Sun, Jul 14th, 1pm-4pm EDT', seatsLeft: 10 },
        { date: 'Mon, Jul 15th, 2pm-5pm EDT', seatsLeft: 8 },
      ],
      reviews: 140,
      rating: 4.9,
      location: '456 Art St, Seattle, WA',
      ageLimit: '18 and older',
      startDate: 'July 14th, 2023',
      time: '1:00 PM - 4:00 PM EDT',
      avgSessionDuration: '3 hours',
      numOfClasses: 2,
      attending: 12,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      id: '33',
      image: 'https://images.pexels.com/photos/3024851/pexels-photo-3024851.jpeg',
      title: 'Culinary Workshop',
      host: 'Master Chefs',
      capacity: 20,
      ageGroup: '16+',
      price: '$95',
      venue: 'Culinary Institute',
      description: 'Elevate your cooking skills with our Culinary Workshop. Learn from professional chefs and prepare gourmet dishes. Perfect for food enthusiasts and aspiring chefs.',
      amenities: ['Ingredients Provided', 'Recipe Book', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Tue, Jul 16th, 10am-2pm EDT', seatsLeft: 15 },
        { date: 'Wed, Jul 17th, 12pm-4pm EDT', seatsLeft: 12 },
      ],
      reviews: 200,
      rating: 4.8,
      location: '789 Culinary Ln, New Orleans, LA',
      ageLimit: '16 and older',
      startDate: 'July 16th, 2023',
      time: '10:00 AM - 2:00 PM EDT',
      avgSessionDuration: '4 hours',
      numOfClasses: 2,
      attending: 16,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
    // Packages
    {
      id: '13',
      image: 'https://images.pexels.com/photos/936093/pexels-photo-936093.jpeg',
      title: 'Fitness Bootcamp',
      host: 'Gym',
      capacity: 30,
      ageGroup: '18+',
      price: '$200',
      venue: 'Outdoor Park',
      description: 'Join our intensive Fitness Bootcamp and achieve your fitness goals. Our trainers will guide you through various exercises designed to build strength and endurance. Suitable for all fitness levels.',
      amenities: ['Water Bottle', 'Workout Plan', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Mon, Jul 22nd, 6am-8am EDT', seatsLeft: 20 },
        { date: 'Tue, Jul 23rd, 6am-8am EDT', seatsLeft: 18 },
      ],
      reviews: 250,
      rating: 4.9,
      location: '123 Fitness Park, Los Angeles, CA',
      ageLimit: '18 and older',
      startDate: 'July 22nd, 2023',
      time: '6:00 AM - 8:00 AM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 22,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/81.jpg',
    },
    {
      id: '20',
      image: 'https://images.pexels.com/photos/3820381/pexels-photo-3820381.jpeg',
      title: 'Yoga Retreat',
      host: 'Yoga Studio',
      capacity: 25,
      ageGroup: '18+',
      price: '$250',
      venue: 'Mountain Resort',
      description: 'Escape the hustle and bustle of city life with our Yoga Retreat. Enjoy a weekend of relaxation, meditation, and yoga sessions led by experienced instructors. All meals and accommodations included.',
      amenities: ['Yoga Mats Provided', 'All Meals Included', 'Accommodation'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Fri, Aug 2nd - Sun, Aug 4th', seatsLeft: 10 },
        { date: 'Fri, Aug 9th - Sun, Aug 11th', seatsLeft: 12 },
      ],
      reviews: 280,
      rating: 4.9,
      location: '456 Mountain Rd, Asheville, NC',
      ageLimit: '18 and older',
      startDate: 'August 2nd, 2023',
      time: 'All Day Event',
      avgSessionDuration: '2 days',
      numOfClasses: 2,
      attending: 20,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/women/69.jpg',
    },
    {
      id: '21',
      image: 'https://images.pexels.com/photos/3741015/pexels-photo-3741015.jpeg',
      title: 'Wellness Spa Weekend',
      host: 'Luxury Spa',
      capacity: 20,
      ageGroup: '18+',
      price: '$300',
      venue: 'Luxury Spa Resort',
      description: 'Pamper yourself with our Wellness Spa Weekend. Enjoy a range of spa treatments, including massages, facials, and body wraps. Relax in our luxurious facilities and unwind with yoga and meditation sessions.',
      amenities: ['Spa Treatments', 'Meals Provided', 'Accommodation'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Sat, Aug 10th - Sun, Aug 11th', seatsLeft: 8 },
        { date: 'Sat, Aug 17th - Sun, Aug 18th', seatsLeft: 10 },
      ],
      reviews: 300,
      rating: 4.8,
      location: '789 Spa Ln, Miami, FL',
      ageLimit: '18 and older',
      startDate: 'August 10th, 2023',
      time: 'All Day Event',
      avgSessionDuration: '2 days',
      numOfClasses: 2,
      attending: 15,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/82.jpg',
    },
    {
      id: '34',
      image: 'https://images.pexels.com/photos/1308755/pexels-photo-1308755.jpeg',
      title: 'Hiking and Camping Package',
      host: 'Adventure Trails',
      capacity: 20,
      ageGroup: '18+',
      price: '$150',
      venue: 'National Park',
      description: 'Explore the great outdoors with our Hiking and Camping Package. Enjoy guided hikes, campfire cooking, and stargazing. Perfect for nature enthusiasts and adventure seekers.',
      amenities: ['Camping Gear Provided', 'Guided Hikes', 'Meals Included'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Fri, Aug 23rd - Sun, Aug 25th', seatsLeft: 10 },
        { date: 'Fri, Aug 30th - Sun, Sep 1st', seatsLeft: 12 },
      ],
      reviews: 220,
      rating: 4.7,
      location: '123 Park Rd, Yellowstone, WY',
      ageLimit: '18 and older',
      startDate: 'August 23rd, 2023',
      time: 'All Day Event',
      avgSessionDuration: '3 days',
      numOfClasses: 2,
      attending: 15,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/83.jpg',
    },
    {
      id: '35',
      image: 'https://images.pexels.com/photos/1531677/pexels-photo-1531677.jpeg',
      title: 'Scuba Diving Package',
      host: 'Dive Deep',
      capacity: 15,
      ageGroup: '18+',
      price: '$400',
      venue: 'Tropical Beach',
      description: 'Dive into adventure with our Scuba Diving Package. Experience the underwater world with guided dives, training sessions, and all equipment provided. Suitable for both beginners and experienced divers.',
      amenities: ['Scuba Gear Provided', 'Guided Dives', 'Accommodation'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Mon, Sep 2nd - Fri, Sep 6th', seatsLeft: 5 },
        { date: 'Mon, Sep 9th - Fri, Sep 13th', seatsLeft: 7 },
      ],
      reviews: 190,
      rating: 4.8,
      location: '456 Beach Rd, Hawaii, HI',
      ageLimit: '18 and older',
      startDate: 'September 2nd, 2023',
      time: 'All Day Event',
      avgSessionDuration: '5 days',
      numOfClasses: 2,
      attending: 10,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/84.jpg',
    },
    {
      id: '36',
      image: 'https://images.pexels.com/photos/1717946/pexels-photo-1717946.jpeg',
      title: 'Photography Expedition',
      host: 'Photo Adventures',
      capacity: 12,
      ageGroup: '18+',
      price: '$350',
      venue: 'Scenic Locations',
      description: 'Join our Photography Expedition and capture breathtaking landscapes. Learn advanced photography techniques from professionals and enjoy guided tours to scenic spots. Perfect for photography enthusiasts.',
      amenities: ['Camera Gear Provided', 'Guided Tours', 'Meals Included'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Fri, Sep 20th - Sun, Sep 22nd', seatsLeft: 6 },
        { date: 'Fri, Sep 27th - Sun, Sep 29th', seatsLeft: 8 },
      ],
      reviews: 210,
      rating: 4.9,
      location: '123 Scenic Rd, Grand Canyon, AZ',
      ageLimit: '18 and older',
      startDate: 'September 20th, 2023',
      time: 'All Day Event',
      avgSessionDuration: '3 days',
      numOfClasses: 2,
      attending: 10,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/85.jpg',
    },
    // More Learn a Skill
    {
      id: '22',
      image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg',
      title: 'Learn to Play Guitar',
      host: 'Music Academy',
      capacity: 15,
      ageGroup: '12+',
      price: '$120',
      venue: 'Music Academy',
      description: 'Learn to play the guitar with our professional instructors. This course covers basic to advanced techniques, including chords, scales, and strumming patterns. Perfect for beginners and intermediate players.',
      amenities: ['Guitar Provided', 'Sheet Music', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Mon, Sep 30th, 4-6pm EDT', seatsLeft: 10 },
        { date: 'Wed, Oct 2nd, 4-6pm EDT', seatsLeft: 12 },
      ],
      reviews: 180,
      rating: 4.8,
      location: '456 Music Ln, Nashville, TN',
      ageLimit: '12 and older',
      startDate: 'September 30th, 2023',
      time: '4:00 PM - 6:00 PM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 12,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/86.jpg',
    },
    {
      id: '23',
      image: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg',
      title: 'DIY Home Repairs',
      host: 'Home Improvement Center',
      capacity: 20,
      ageGroup: '18+',
      price: '$80',
      venue: 'Home Improvement Center',
      description: 'Learn to tackle common home repairs with confidence. Our experts will guide you through various DIY projects, including plumbing, electrical work, and carpentry. No prior experience required.',
      amenities: ['Tools Provided', 'Workshop Guide', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Sat, Oct 5th, 9am-12pm EDT', seatsLeft: 10 },
        { date: 'Sun, Oct 6th, 9am-12pm EDT', seatsLeft: 12 },
      ],
      reviews: 170,
      rating: 4.7,
      location: '789 Repair Rd, Houston, TX',
      ageLimit: '18 and older',
      startDate: 'October 5th, 2023',
      time: '9:00 AM - 12:00 PM EDT',
      avgSessionDuration: '3 hours',
      numOfClasses: 2,
      attending: 15,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/87.jpg',
    },
    {
      id: '24',
      image: 'https://images.pexels.com/photos/66066/pexels-photo-66066.jpeg',
      title: 'Gardening for Beginners',
      host: 'Community Garden',
      capacity: 20,
      ageGroup: '18+',
      price: '$50',
      venue: 'Community Garden',
      description: 'Discover the basics of gardening with our beginner-friendly course. Learn about soil preparation, planting techniques, and garden maintenance. Perfect for those looking to start their own garden.',
      amenities: ['Gardening Tools', 'Plant Seeds', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Fri, Oct 11th, 10am-12pm EDT', seatsLeft: 12 },
        { date: 'Sat, Oct 12th, 10am-12pm EDT', seatsLeft: 8 },
      ],
      reviews: 150,
      rating: 4.6,
      location: '123 Garden Ln, Portland, OR',
      ageLimit: '18 and older',
      startDate: 'October 11th, 2023',
      time: '10:00 AM - 12:00 PM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 16,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/women/70.jpg',
    },
    // More Unique Experiences
    {
      id: '25',
      image: 'https://images.pexels.com/photos/1209318/pexels-photo-1209318.jpeg',
      title: 'Hot Air Balloon Ride',
      host: 'Adventure Company',
      capacity: 10,
      ageGroup: '18+',
      price: '$300',
      venue: 'Open Fields',
      description: 'Experience the thrill of a hot air balloon ride. Enjoy breathtaking views from above and capture stunning photos. A perfect adventure for thrill-seekers and nature lovers.',
      amenities: ['Balloon Ride', 'Complimentary Photos', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Sat, Oct 19th, 6am-8am EDT', seatsLeft: 5 },
        { date: 'Sun, Oct 20th, 6am-8am EDT', seatsLeft: 8 },
      ],
      reviews: 190,
      rating: 4.9,
      location: '456 Adventure Ln, Sedona, AZ',
      ageLimit: '18 and older',
      startDate: 'October 19th, 2023',
      time: '6:00 AM - 8:00 AM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 10,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/88.jpg',
    },
    {
      id: '26',
      image: 'https://images.pexels.com/photos/164502/pexels-photo-164502.jpeg',
      title: 'Scuba Diving Adventure',
      host: 'Dive School',
      capacity: 12,
      ageGroup: '18+',
      price: '$400',
      venue: 'Coral Reef',
      description: 'Dive into the depths of the ocean with our Scuba Diving Adventure. Explore coral reefs, shipwrecks, and marine life. All equipment and training provided.',
      amenities: ['Scuba Gear', 'Underwater Photos', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Mon, Oct 21st - Wed, Oct 23rd', seatsLeft: 6 },
        { date: 'Thu, Oct 24th - Sat, Oct 26th', seatsLeft: 8 },
      ],
      reviews: 220,
      rating: 4.8,
      location: '789 Dive Ln, Key West, FL',
      ageLimit: '18 and older',
      startDate: 'October 21st, 2023',
      time: 'All Day Event',
      avgSessionDuration: '3 days',
      numOfClasses: 2,
      attending: 10,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/89.jpg',
    },
    {
      id: '27',
      image: 'https://images.pexels.com/photos/33608/aircraft-jet-landing-cloud.jpg',
      title: 'Helicopter Tour',
      host: 'Aerial Tours',
      capacity: 5,
      ageGroup: '18+',
      price: '$500',
      venue: 'Helipad',
      description: 'Take to the skies with our Helicopter Tour. Enjoy panoramic views of the city and its landmarks. Perfect for special occasions and sightseeing.',
      amenities: ['Helicopter Ride', 'Complimentary Photos', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Fri, Nov 1st, 9am-11am EDT', seatsLeft: 2 },
        { date: 'Sat, Nov 2nd, 10am-12pm EDT', seatsLeft: 3 },
      ],
      reviews: 180,
      rating: 4.9,
      location: '123 Sky Ln, New York, NY',
      ageLimit: '18 and older',
      startDate: 'November 1st, 2023',
      time: '9:00 AM - 11:00 AM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 5,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/90.jpg',
    },
    // More Practice
    {
      id: '28',
      image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg',
      title: 'Meditation Classes',
      host: 'Wellness Center',
      capacity: 15,
      ageGroup: '18+',
      price: '$90',
      venue: 'Wellness Center',
      description: 'Find inner peace with our Meditation Classes. Learn various meditation techniques to reduce stress and improve mental clarity. Suitable for all experience levels.',
      amenities: ['Meditation Mats', 'Workshop Material', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Sun, Nov 10th, 10am-12pm EDT', seatsLeft: 8 },
        { date: 'Mon, Nov 11th, 10am-12pm EDT', seatsLeft: 10 },
      ],
      reviews: 140,
      rating: 4.7,
      location: '456 Peace Ln, San Diego, CA',
      ageLimit: '18 and older',
      startDate: 'November 10th, 2023',
      time: '10:00 AM - 12:00 PM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 10,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/91.jpg',
    },
    {
      id: '29',
      image: 'https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg',
      title: 'Advanced Yoga',
      host: 'Yoga Studio',
      capacity: 20,
      ageGroup: '18+',
      price: '$110',
      venue: 'Yoga Studio Downtown',
      description: 'Enhance your yoga practice with our Advanced Yoga classes. Learn advanced poses, breathing techniques, and meditation. Suitable for experienced yoga practitioners.',
      amenities: ['Yoga Mats', 'Workshop Material', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Tue, Nov 12th, 6pm-8pm EDT', seatsLeft: 12 },
        { date: 'Wed, Nov 13th, 6pm-8pm EDT', seatsLeft: 10 },
      ],
      reviews: 160,
      rating: 4.8,
      location: '123 Yoga Ln, Denver, CO',
      ageLimit: '18 and older',
      startDate: 'November 12th, 2023',
      time: '6:00 PM - 8:00 PM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 15,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/women/71.jpg',
    },
    {
      id: '30',
      image: 'https://images.pexels.com/photos/303846/pexels-photo-303846.jpeg',
      title: 'CrossFit Training',
      host: 'CrossFit Gym',
      capacity: 20,
      ageGroup: '18+',
      price: '$130',
      venue: 'CrossFit Gym',
      description: 'Challenge yourself with our CrossFit Training program. Our certified trainers will push you to your limits with high-intensity workouts. Perfect for fitness enthusiasts looking to take their training to the next level.',
      amenities: ['Gym Equipment', 'Workout Plan', 'Certificate of Completion'],
      mapImage: '/assets/map.png',
      dates: [
        { date: 'Thu, Nov 14th, 5pm-7pm EDT', seatsLeft: 10 },
        { date: 'Fri, Nov 15th, 5pm-7pm EDT', seatsLeft: 12 },
      ],
      reviews: 180,
      rating: 4.7,
      location: '456 Fitness Ln, Austin, TX',
      ageLimit: '18 and older',
      startDate: 'November 14th, 2023',
      time: '5:00 PM - 7:00 PM EDT',
      avgSessionDuration: '2 hours',
      numOfClasses: 2,
      attending: 15,
      hostType: 'Professional',
      profilePicture: 'https://randomuser.me/api/portraits/men/92.jpg',
    },
  ];
  
  export default experiences;
  