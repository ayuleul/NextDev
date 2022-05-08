import axios from 'axios';
const baseURL = 'https://dev.to/api';

export const ARTICLES_URI = axios.create({
  baseURL: `${baseURL}/articles`,
});

export const TAGS_URI = axios.create({
  baseURL: `${baseURL}/tags`,
});
