declare interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

declare interface Organization {
  name: string;
  username: string;
  slug: string;
  profile_image: string;
  profile_image_90: string;
}

declare interface IFeatured {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  social_image: string;
  tag_list: any[];
  tags: string;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  collection_id?: any;
  created_at: Date;
  edited_at: Date;
  crossposted_at?: any;
  published_at: Date;
  last_comment_at: Date;
  published_timestamp: Date;
  reading_time_minutes: number;
  user: User;
  organization: Organization;
}

declare type IFeaturedList = IFeatured[];
