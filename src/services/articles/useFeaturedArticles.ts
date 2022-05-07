import {ARTICLES_URI} from '..';
import {useQuery} from 'react-query';

export const useFeaturedArticles = ({page = 1, per_page = 30} = {}) => {
  const result = useQuery(
    ['featured', {page, per_page}],
    (): Promise<{
      data: IFeaturedList;
    }> => ARTICLES_URI.get(''),
    {
      keepPreviousData: true,
    },
  );
  const featured = result.data?.data || [];
  return {
    featured,
    ...result,
  };
};
