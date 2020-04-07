export default class ModelOffer {
  constructor(data) {
    this.id = data.id;
    this.city = {
      name: data.city.name,
      location: {
        x: data.city.location.latitude,
        y: data.city.location.longitude,
        zoom: data.city.location.zoom,
      }
    };
    this.title = data.title;
    this.image = data.preview_image;
    this.description = data.description;
    this.images = data.images;
    this.facilities = data.goods;
    this.price = data.price;
    this.rating = data.rating;
    this.type = data.type;
    this.isFavorite = data.is_favorite;
    this.isPremium = data.is_premium;
    this.bedrooms = data.bedrooms;
    this.maxAdults = data.max_adults;
    this.host = {
      name: data.host.name,
      isPro: data.host.is_pro,
      avatarUrl: data.host.avatar_url,
    };
    this.location = {
      x: data.location.latitude,
      y: data.location.longitude,
      zoom: data.location.zoom,
    };
  }

  static parseOffer(data) {
    return new ModelOffer(data);
  }

  static parseOffers(data) {
    return data.map(ModelOffer.parseOffer);
  }
}
