const dummyEvents = [
  {
    id: "2017",
    events: [
      {
        evNo: 1,
        date: new Date(2017, 5 - 1, 12),
        title: "Feeding Hearts, Nourishing Hope: Food Donation Campaign",
        description: `"Feeding Hearts, Nourishing Hope" - A food donation campaign providing nutritious meals and hope to those in need. Your support can create a world without hunger. Join us in spreading kindness and making a difference by contributing to our cause. 
        Together, we can bring smiles to hungry faces and brighten the lives of the less fortunate. Through this initiative, we aim to not only fill empty stomachs but also nourish souls with love and compassion. By supporting our mission, you become a vital part of the effort to combat hunger and uplift communities. Let's empower individuals, families, and communities, one meal at a time, and build a future where no one goes to bed hungry.`,
        location: "Mumbai",
      },
      {
        evNo: 2,
        date: new Date(2017, 7 - 1, 15),
        title: "The Harvest of Hope - An Exciting Community Food Drive",
        description:
          "Community Food Drive to alleviate hunger and nourish those in need. Your support matters! Donate non-perishable items or contribute financially. Together, let's ensure that no one in our community goes hungry or struggles to put food on their table. By coming together and cultivating hope through acts of kindness, we can create a stronger and more resilient community. Your generosity can bring comfort and relief to those facing difficult times, making a meaningful difference in their lives. Let's stand united in the fight against hunger and work towards a future where everyone has access to nutritious meals and the hope they deserve.",
        location: "Pune",
      },
      {
        evNo: 3,
        date: new Date(2017, 9 - 1, 21),
        title: "Feast for All - Thanksgiving Food Donation Campaign",
        description:
          "Thanksgiving Food Donation Campaign. Share the spirit of Thanksgiving by ensuring everyone in our community enjoys a nourishing meal.  Your generous donations create a warm and inclusive celebration, spreading love and compassion to those facing food insecurity. By joining hands with us, you can make a meaningful impact this holiday season and brighten the lives of those in need. Let's make this Thanksgiving a time of giving and sharing, where no one is left hungry or forgotten.",
        location: "Delhi",
      },
    ],
  },
  {
    id: "2018",
    events: [
      {
        evNo: 1,
        date: new Date(2018, 3 - 1, 22),
        title: "Nourishing Lives - Annual Food Drive",
        description:
          "Join our Annual Food Drive to nourish lives in our community. Together, let's combat hunger and provide sustenance to those in need. Your generous contributions play a crucial role in making a significant impact on the lives of individuals and families facing food insecurity. With your support, we can spread hope and create a brighter, more promising future for all members of our community. By participating in this meaningful initiative, you become a beacon of kindness and compassion. Let's unite in this noble cause and make a lasting difference in the lives of those we serve.",
        location: "Bangalore",
      },
      {
        evNo: 2,
        date: new Date(2018, 6 - 1, 11),
        title: "Share the Blessings - Ramadan Food Donation",
        description:
          "During the holy month of Ramadan, let's share blessings with those less fortunate. Join us in our Ramadan Food Donation campaign to provide essential food items to those facing hunger. Your heartfelt contributions play a pivotal role in uplifting the spirits of our community members in need, bringing them nourishment and hope during this sacred time. Together, we can create a ripple of kindness that resonates throughout our community, spreading warmth and love to those who require it the most. As we fast and reflect during this auspicious month, let's also embrace the spirit of giving and generosity, making a positive impact on the lives of countless individuals and families. By supporting our campaign, you become an integral part of our mission to alleviate hunger and foster compassion, embodying the true essence of celebration.",
        location: "Hyderabad",
      },
      {
        evNo: 3,
        date: new Date(2018, 11 - 1, 30),
        title: "Winter Warmth - A Charitable Food & Clothing Drive",
        description:
          "As winter approaches, let's extend warmth to those in need. Join our Food and Clothing Drive to ensure that vulnerable individuals have access to nourishing meals and warm clothing during the cold season. By participating in our Food and Clothing Drive, you become a beacon of hope, providing not just sustenance but also a sense of comfort and security to those who are less fortunate. Your generosity will help us reach out to individuals and families who may be struggling to stay warm and nourished during the winter months.Together, we can make a profound impact on the lives of our neighbors, ensuring that no one is left behind during the cold season.",
        location: "Kolkata",
      },
    ],
  },
  {
    id: "2019",
    events: [
      {
        evNo: 1,
        date: new Date(2019, 4 - 1, 17),
        title: "Bountiful Harvest - Spring Food Donation",
        description:
          "Celebrate the season of renewal by participating in our Spring Food Donation. Your contributions help provide fresh produce and essential food items to those in need. Spring is a season of hope and promise, and by participating in our Food Donation campaign, you become a vital part of this transformational journey. Your involvement helps create a ripple effect of positivity, not only addressing immediate needs but also sowing the seeds for a more resilient and compassionate community. Let's celebrate the season of renewal together and embrace the true spirit of giving. Your involvement in our Spring Food Donation campaign is an expression of care and concern for those who need it most",
        location: "Chennai",
      },
      {
        evNo: 2,
        date: new Date(2019, 8 - 1, 20),
        title: "Back to School - School Supplies and Food Drive",
        description:
          "Support education and nutrition for underprivileged children. Join our Back to School Drive to provide school supplies and nourishing meals for a successful academic year. Education is the key to unlocking a world of opportunities for children. By participating in our Back to School Drive, you become a champion for education, empowering these young minds with the tools they need to thrive in their studies. Your generous contributions of school supplies such as notebooks, pencils, backpacks, and more can make a tangible difference in enhancing their learning experience. Together, we can empower young minds and build a brighter future.",
        location: "Mumbai",
      },
      {
        evNo: 3,
        date: new Date(2019, 11 - 1, 28),
        title: "Season of Giving - Holiday Food Donation",
        description:
          "Spread joy during the holiday season by participating in our Holiday Food Donation. Your support ensures that everyone can enjoy a festive meal. Together, we can create a ripple effect of positivity and generosity that extends far beyond the holiday season. As we gather with our loved ones to celebrate, let's also remember those who may not have the same privileges. Your participation in our Holiday Food Donation campaign is an opportunity to extend the holiday spirit to those who may be feeling lonely or less fortunate. The holiday season is a time to cherish and be grateful for all that we have. Let's share our blessings through our community.",
        location: "Delhi",
      },
    ],
  },
  {
    id: "2020",
    events: [
      {
        evNo: 1,
        date: new Date(2020, 6 - 1, 15),
        title: "Empowering Communities",
        description:
          "Join our Food Drive for Sustainability to empower communities with access to nutritious and sustainable food sources. Your support plays a vital role in promoting food security and creating a healthier future for all. At the heart of this initiative is the belief that access to nutritious and sustainable food is not just a basic necessity but a fundamental right for every individual. Join us in our Food Drive for Sustainability and let's make a positive impact on the lives of individuals, families, and entire communities.",
        location: "Bangalore",
      },
      {
        evNo: 2,
        date: new Date(2020, 9 - 1, 19),
        title: "A Harvest of Thanks - Thanksgiving Food Donation",
        description:
          "Celebrate the spirit of gratitude by participating in our Thanksgiving Food Donation. Your generosity ensures that everyone can partake in a hearty meal and experience the joy of giving thanks. Together, we create an inclusive and joyous celebration, where the essence of giving thanks extends to every member of our community. Let's come together to share the blessings of abundance and foster a sense of togetherness as we embrace the true meaning of Thanksgiving - a time of giving, sharing, and expressing gratitude.",
        location: "Pune",
      },
      {
        evNo: 3,
        date: new Date(2020, 12 - 1, 23),
        title:
          "Spreading Warmth & Kindness - A Winter Food & Clothing Charity Event",
        description:
          "Bring warmth and comfort to those in need during the winter season. Join our Winter Food and Clothing Drive to provide nourishing meals and essential winter clothing. ogether, we can make a meaningful impact on the lives of those facing challenges during this time of year, offering them a glimmer of hope and a sense of security. Join us in spreading the spirit of giving and compassion, as we come together to create a community where no one is left behind in the face of winter's trials. Let's share the warmth of our hearts and make the winter season more bearable for all, fostering a sense of togetherness and solidarity that transcends the chill.",
        location: "Hyderabad",
      },
    ],
  },
  {
    id: "2021",
    events: [
      {
        evNo: 1,
        date: new Date(2021, 5 - 1, 20),
        title: "Harvesting Hope - Food Donation Campaign",
        description:
          "Participate in our Food Donation Campaign to harvest hope for individuals and families facing food insecurity. Your support can bring nourishment and optimism to those in need. By joining hands, we can sow the seeds of kindness and cultivate a bountiful harvest of positive change. Let's stand together, making a difference one meal at a time, and ensure that no one goes hungry in our midst. By taking these basic steps; we can contribute towards the goal of having every person in the vicinity - have the opportunity to thrive and flourish.",
        location: "Mumbai",
      },
      {
        evNo: 2,
        date: new Date(2021, 8 - 1, 17),
        title: "Back to School - Food & School Supplies Drive",
        description:
          "Support education and nutrition for underprivileged children. Join our Back to School Drive to provide school supplies and nourishing meals for a successful academic year. Together, we can empower young minds and build a brighter future. By this, we can ensure they have the tools they need for their healthy personal growth. Together, we have the power to empower these children and build a brighter future for them. Education is a powerful tool that can break the cycle of poverty and open doors to endless opportunities. Let's come together as a community to make a positive impact, giving these children the chance to dream big and achieve their goals. ",
        location: "Delhi",
      },
      {
        evNo: 3,
        date: new Date(2021, 12 - 1, 29),
        title: "Season of Giving - Holiday Food Donation",
        description:
          "Spread joy during the holiday season by participating in our Holiday Food Donation. Your support ensures that everyone can enjoy a festive meal. Let's come together and make this holiday season a special one for all. Let's embrace the spirit of compassion and generosity, and come together as a community to make a positive difference. Together, we can create a holiday season filled with warmth, love, and hope for everyone. Your kindness and generosity have the power to touch the hearts of those less fortunate, and the joy you spread will reverberate throughout the community. Join us in this wonderful and charitable journey of giving!",
        location: "Bangalore",
      },
    ],
  },
  {
    id: "2022",
    events: [
      {
        evNo: 1,
        date: new Date(2022, 3 - 1, 19),
        title: "Nourishing Lives - Annual Food Drive",
        description:
          "Join our Annual Food Drive to nourish lives in our community. Together, let's combat hunger and provide sustenance to those in need. Your generous contributions hold the power to transform lives, offering comfort and support to individuals and families in their time of need. By joining hands with us, you become an essential part of a compassionate movement, shining a light of hope into the lives of those facing hardship. With each donation, we plant seeds of hope that blossom into a brighter tomorrow. Your kindness not only fills empty stomachs but also fills hearts with warmth and gratitude. Together, we create a community that thrives on compassion, understanding, and solidarity, fostering an environment where everyone can thrive.",
        location: "Pune",
      },
      {
        evNo: 2,
        date: new Date(2022, 6 - 1, 14),
        title: "Share the Blessings - Ramadan Food Donation",
        description:
          "During the holy month of Ramadan, let's share blessings with those less fortunate. Join us in our Ramadan Food Donation campaign to provide essential food items to those facing hunger. Your involvement in this campaign fosters a sense of togetherness, forging bonds of compassion and understanding. As we share our blessings, we build a community where everyone's well-being is a shared responsibility. Your dedication to making a difference inspires others to join in, amplifying the impact of our efforts. Let's come together and make a profound difference in the lives of those facing hunger during Ramadan. Your compassion and generosity nourish both bodies and souls, fostering a sense of hope and resilience in the face of adversity.",
        location: "Hyderabad",
      },
      {
        evNo: 3,
        date: new Date(2022, 10 - 1, 1),
        title: "Season of Giving - Holiday Food Donation",
        description:
          "Spread joy during the holiday season by participating in our Holiday Food Donation. Your support ensures that everyone can enjoy a festive meal. Together, let's create a warm and inclusive atmosphere, where no one in our community goes without a nourishing and satisfying holiday meal. Your generosity not only feeds the body but also uplifts spirits, reminding those in need that they are cherished and valued. As we come together in the spirit of giving, we make this holiday season a memorable and meaningful one for all, fostering a sense of togetherness and joy that extends far beyond the dinner table. Join us in spreading the magic of the holidays through the simple act of sharing, and let's make a positive impact that brightens the lives of those we serve.",
        location: "Kolkata",
      },
    ],
  },
  {
    id: "2023",
    events: [
      {
        evNo: 1,
        date: new Date(2023, 2 - 1, 18),
        title: "Strengthening Neighbourhoods",
        description:
          "Join our Food Drive for Sustainability to empower communities with access to nutritious and sustainable food sources. Your invaluable support plays a vital role in promoting food security and ensuring that everyone has access to nourishing meals. By contributing to this initiative, you become a crucial part of creating a healthier and more sustainable future for all. Through your generosity and dedication, we can make a meaningful impact on the lives of individuals and families, fostering a stronger and more resilient community. Join our mission and be a force for positive change, shaping a world where food insecurity becomes a thing of the past.",
        location: "Chennai",
      },
      {
        evNo: 2,
        date: new Date(2023, 9 - 1, 25),
        title: "Feast for All - Thanksgiving Food Donation Campaign",
        description:
          "Thanksgiving Food Donation Campaign. Share the spirit of Thanksgiving by ensuring everyone in our community enjoys a nourishing meal. Your generous donations play a significant role in creating a warm and inclusive celebration for all, spreading love and compassion to those facing food insecurity. As we come together in the spirit of giving, we have the power to make a meaningful impact and bring joy to those in need during this holiday season. Join us on this journey of kindness and make a difference in the lives of our fellow community members. Let's create a Thanksgiving to remember, where no one goes hungry, and everyone experiences the warmth of a caring community.",
        location: "Mumbai",
      },
      {
        evNo: 3,
        date: new Date(2023, 12 - 1, 31),
        title:
          "Emanating Warmth & Love - A Generous Winter Food and Clothing Drive",
        description:
          "Bring warmth and comfort to those in need during the winter season. Join our Winter Food and Clothing Drive to provide nourishing meals and essential winter clothing. You play a crucial role in bringing relief and hope to individuals and families in need; thus help make the winter season more bearable for everyone. With your generosity, we can create a community that cares, ensuring that no one is left to face the cold and hunger alone. Let's spread the spirit of giving and make this winter season a season of warmth and kindness for all.",
        location: "Delhi",
      },
    ],
  },
];

export default dummyEvents;
