export interface IImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    username: string;
    name: String;
    twitter_username: string;
  };
}

export interface IImageData {
  id: string;
  urls: {
    regular: string;
  };
  user: {
    username: string;
    name: string;
    twitter_username: string;
    profile_image: {
      small: string;
      medium: string;
    };
  };
}
