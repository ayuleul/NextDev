import {TAGS_URI} from '..';

export const getTags$ = async ({page = 1, per_page = 30}) => {
  try {
    return await TAGS_URI.get('', {params: {page, per_page}});
  } catch (e) {
    console.log(e);
  }
};
