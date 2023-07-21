const dummyEvents = [
    {
      id: "2017",
      events: [
        {
          evNo: 1,
          date: new Date(2007, 5, 12),
          title: "Feeding Hearts, Nourishing Hope: Food Donation Campaign",
          description: `"Feeding Hearts, Nourishing Hope" - A food donation campaign providing nutritious meals and hope to those in need. Your support can create a world without hunger. Join us in spreading kindness and making a difference.`,
          location: "Mumbai",
        },
        {
          evNo: 2,
          date: new Date(2007, 7, 15),
          title: "Harvest of Hope - Community Food Drive",
          description:
            "Community Food Drive to alleviate hunger and nourish those in need. Your support matters! Donate non-perishable items or contribute financially. Together, let's ensure no one in our community goes hungry. Cultivate hope with acts of kindness. ",
          location: "Pune",
        },
        {
          evNo: 3,
          date: new Date(2007, 9, 21),
          title: "Feast for All - Thanksgiving Food Donation Campaign",
          description:
            "Thanksgiving Food Donation Campaign. Share the spirit of Thanksgiving by ensuring everyone in our community enjoys a nourishing meal. Your donations create a warm and inclusive celebration, spreading love to those facing food insecurity. Join us in making a meaningful impact this holiday season. ",
          location: "Delhi",
        },
      ],
    },
    {
      id: "2018",
      events: [
        {
          evNo: 1,
          date: new Date(2018, 3, 22),
          title: "Nourishing Lives - Annual Food Drive",
          description:
            "Join our Annual Food Drive to nourish lives in our community. Together, let's combat hunger and provide sustenance to those in need. Your generous donations make a significant impact on the lives of individuals and families. Let's spread hope and create a brighter future for all.",
          location: "Bangalore",
        },
        {
          evNo: 2,
          date: new Date(2018, 6, 11),
          title: "Share the Blessings - Ramadan Food Donation",
          description:
            "During the holy month of Ramadan, let's share blessings with those less fortunate. Join us in our Ramadan Food Donation campaign to provide essential food items to those facing hunger. Your contributions make a difference in uplifting the spirits of our community members in need.",
          location: "Hyderabad",
        },
        {
          evNo: 3,
          date: new Date(2018, 11, 30),
          title: "Winter Warmth - Food and Clothing Drive",
          description:
            "As winter approaches, let's extend warmth to those in need. Join our Food and Clothing Drive to ensure that vulnerable individuals have access to nourishing meals and warm clothing during the cold season. Together, we can make a positive impact on the lives of our fellow community members.",
          location: "Kolkata",
        },
      ],
    },
    {
      id: "2019",
      events: [
        {
          evNo: 1,
          date: new Date(2019, 4, 17),
          title: "Bountiful Harvest - Spring Food Donation",
          description:
            "Celebrate the season of renewal by participating in our Spring Food Donation. Your contributions help provide fresh produce and essential food items to those in need. Let's sow the seeds of compassion and cultivate a bountiful harvest of hope.",
          location: "Chennai",
        },
        {
          evNo: 2,
          date: new Date(2019, 8, 20),
          title: "Back to School - School Supplies and Food Drive",
          description:
            "Support education and nutrition for underprivileged children. Join our Back to School Drive to provide school supplies and nourishing meals for a successful academic year. Together, we can empower young minds and build a brighter future.",
          location: "Mumbai",
        },
        {
          evNo: 3,
          date: new Date(2019, 11, 28),
          title: "Season of Giving - Holiday Food Donation",
          description:
            "Spread joy during the holiday season by participating in our Holiday Food Donation. Your support ensures that everyone can enjoy a festive meal. Let's come together and make this holiday season a special one for all.",
          location: "Delhi",
        },
      ],
    },
    {
      id: "2020",
      events: [
        {
          evNo: 1,
          date: new Date(2020, 6, 15),
          title: "Empowering Communities - Food Drive for Sustainability",
          description:
            "Join our Food Drive for Sustainability to empower communities with access to nutritious and sustainable food sources. Your support plays a vital role in promoting food security and creating a healthier future for all.",
          location: "Bangalore",
        },
        {
          evNo: 2,
          date: new Date(2020, 9, 19),
          title: "A Harvest of Thanks - Thanksgiving Food Donation",
          description:
            "Celebrate the spirit of gratitude by participating in our Thanksgiving Food Donation. Your generosity ensures that everyone can partake in a hearty meal and experience the joy of giving thanks.",
          location: "Pune",
        },
        {
          evNo: 3,
          date: new Date(2020, 12, 23),
          title: "Spreading Warmth - Winter Food and Clothing Drive",
          description:
            "Bring warmth and comfort to those in need during the winter season. Join our Winter Food and Clothing Drive to provide nourishing meals and essential winter clothing. Together, we can make the winter season more bearable for those facing challenges.",
          location: "Hyderabad",
        },
      ],
    },
    {
      id: "2021",
      events: [
        {
          evNo: 1,
          date: new Date(2021, 5, 20),
          title: "Harvesting Hope - Food Donation Campaign",
          description:
            "Participate in our Food Donation Campaign to harvest hope for individuals and families facing food insecurity. Your support can bring nourishment and optimism to those in need.",
          location: "Mumbai",
        },
        {
          evNo: 2,
          date: new Date(2021, 8, 17),
          title: "Back to School - Food and School Supplies Drive",
          description:
            "Support education and nutrition for underprivileged children. Join our Back to School Drive to provide school supplies and nourishing meals for a successful academic year. Together, we can empower young minds and build a brighter future.",
          location: "Delhi",
        },
        {
          evNo: 3,
          date: new Date(2021, 12, 29),
          title: "Season of Giving - Holiday Food Donation",
          description:
            "Spread joy during the holiday season by participating in our Holiday Food Donation. Your support ensures that everyone can enjoy a festive meal. Let's come together and make this holiday season a special one for all.",
          location: "Bangalore",
        },
      ],
    },
    {
      id: "2022",
      events: [
        {
          evNo: 1,
          date: new Date(2022, 3, 19),
          title: "Nourishing Lives - Annual Food Drive",
          description:
            "Join our Annual Food Drive to nourish lives in our community. Together, let's combat hunger and provide sustenance to those in need. Your generous donations make a significant impact on the lives of individuals and families. Let's spread hope and create a brighter future for all.",
          location: "Pune",
        },
        {
          evNo: 2,
          date: new Date(2022, 6, 14),
          title: "Share the Blessings - Ramadan Food Donation",
          description:
            "During the holy month of Ramadan, let's share blessings with those less fortunate. Join us in our Ramadan Food Donation campaign to provide essential food items to those facing hunger. Your contributions make a difference in uplifting the spirits of our community members in need.",
          location: "Hyderabad",
        },
        {
          evNo: 3,
          date: new Date(2022, 10, 1),
          title: "Season of Giving - Holiday Food Donation",
          description:
            "Spread joy during the holiday season by participating in our Holiday Food Donation. Your support ensures that everyone can enjoy a festive meal. Let's come together and make this holiday season a special one for all.",
          location: "Kolkata",
        },
      ],
    },
    {
      id: "2023",
      events: [
        {
          evNo: 1,
          date: new Date(2023, 2, 18),
          title: "Empowering Communities - Food Drive for Sustainability",
          description:
            "Join our Food Drive for Sustainability to empower communities with access to nutritious and sustainable food sources. Your support plays a vital role in promoting food security and creating a healthier future for all.",
          location: "Chennai",
        },
        {
          evNo: 2,
          date: new Date(2023, 9, 25),
          title: "Feast for All - Thanksgiving Food Donation Campaign",
          description:
            "Thanksgiving Food Donation Campaign. Share the spirit of Thanksgiving by ensuring everyone in our community enjoys a nourishing meal. Your donations create a warm and inclusive celebration, spreading love to those facing food insecurity. Join us in making a meaningful impact this holiday season.",
          location: "Mumbai",
        },
        {
          evNo: 3,
          date: new Date(2023, 12, 31),
          title: "Spreading Warmth - Winter Food and Clothing Drive",
          description:
            "Bring warmth and comfort to those in need during the winter season. Join our Winter Food and Clothing Drive to provide nourishing meals and essential winter clothing. Together, we can make the winter season more bearable for those facing challenges.",
          location: "Delhi",
        },
      ],
    },
  ];

  export default dummyEvents;