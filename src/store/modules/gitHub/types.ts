export enum Types {
  GET_USER = '@gitHub/GET_USER',
  GET_USER_SUCCESS = '@gitHub/GET_USER_SUCCESS',
  GET_USER_FAILURE = '@gitHub/GET_USER_FAILURE',
  GET_USER_CLEAR = '@gitHub/GET_USER_CLEAR',
}

export interface GitHub {
  status: number;
  data: null | UserData;
}

export interface UserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: false;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface Request {
  username: string;
}
