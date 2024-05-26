import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchAlbums } from '../../api/album';
import {
    DEFAULT_PAGINATION_LIMIT,
    DEFAULT_PAGINATION_PAGE,
} from '../../api/config';

export const useAlbums = () =>
    useInfiniteQuery({
        initialPageParam: {
            page: DEFAULT_PAGINATION_PAGE,
            limit: DEFAULT_PAGINATION_LIMIT,
        },
        queryKey: ['albums'],
        queryFn: ({ pageParam }) =>
            fetchAlbums(pageParam.page, pageParam.limit),
        getNextPageParam: (lastPage, _allPages, lastPageParam) => {
            if (lastPage.length === 0) {
                return undefined;
            }

            return {
                ...lastPageParam,
                page: lastPageParam.page + 1,
            };
        },
    });
