const offers = [
  {
    id: 1,
    city: {
      name: `Paris`,
      location: {
        x: 52.3909553943508,
        y: 4.85309666406198
      }
    },
    title: `Beautiful & luxurious studio at great location`,
    image: `img/apartment-01.jpg`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/studio-photos.jpg`,
    ],
    facilities: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    price: 120,
    rating: 4.8,
    type: `apartment`,
    isFavorite: false,
    isPremium: false,
    bedrooms: 3,
    maxAdults: 4,
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
    }
  },
  {
    id: 2,
    city: {
      name: `Cologne`,
      location: {
        x: 52.3909553943508,
        y: 4.85309666406198
      }
    },
    title: `Beautiful & luxurious studio at great location`,
    image: `img/apartment-02.jpg`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/studio-photos.jpg`,
    ],
    facilities: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    price: 120,
    rating: 4.8,
    type: `apartment`,
    isFavorite: true,
    isPremium: false,
    bedrooms: 3,
    maxAdults: 4,
    host: {
      name: ``,
      avatar: `img/avatar-angelina.jpg`,
    }
  },
];

const reviews = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatarUrl": `img/avatar-max.jpg`,
      "id": 4,
      "isPro": false,
      "name": `Max`
    }
  }
];

export {
  offers,
  reviews,
};
