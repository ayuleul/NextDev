import {ARTICLES_URI} from '..';

export const getArticles$ = async ({
  page = 1,
  per_page = 30,
  extraURI = '',
}) => {
  try {
    return await ARTICLES_URI.get(`${extraURI}`, {params: {page, per_page}});
  } catch (e) {
    console.log(e);
  }
};
