import {ARTICLES_URI} from '..';

export const getFeaturedList$ = async ({page = 1, per_page = 30}) => {
  try {
    return await ARTICLES_URI.get('', {params: {page, per_page}});
  } catch (e) {
    console.log(e);
  }
};
