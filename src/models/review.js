export default class ModelReview {
  constructor(data) {
    this.comment = data.comment;
    this.date = data.date;
    this.id = data.id;
    this.rating = data.rating;
    this.user = {
      avatarUrl: data.user.avatar_url,
      name: data.user.name,
      id: data.user.id,
      isPro: data.user.is_pro
    };
  }

  static parseReview(data) {
    return new ModelReview(data);
  }

  static parseReviews(data) {
    return data.map(ModelReview.parseReview);
  }
}
