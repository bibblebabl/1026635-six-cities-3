export default class ModelUser {
  constructor(data) {
    this.avatarUrl = data.avatar_url;
    this.email = data.email;
    this.id = data.id;
    this.isPro = data.is_pro;
    this.name = data.name;
  }

  static parseUser(data) {
    return new ModelUser(data);
  }
}
