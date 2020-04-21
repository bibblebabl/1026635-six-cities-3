type Offer = {
  id: number,
  city: {
    name: string,
    location: {
      x: number,
      y: number,
    },
  },
  title: string,
  image: string,
  description: string,
  images: Array<string>,
  facilities: Array<string>,
  price: number,
  rating: number,
  type: string,
  isFavorite: boolean,
  isPremium: boolean,
  bedrooms: number,
  maxAdults: number,
  host: {
    name: string,
    avatarUrl: string,
  },
  location: {
    x: number,
    y: number,
    zoom: number,
  }
}

export default Offer
