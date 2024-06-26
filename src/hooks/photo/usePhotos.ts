import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../../api/phone';
import {
    DEFAULT_PAGINATION_LIMIT,
    DEFAULT_PAGINATION_PAGE,
} from '../../api/config';

export const usePhotos = (albumId: number | null) =>
    useInfiniteQuery({
        initialPageParam: {
            page: DEFAULT_PAGINATION_PAGE,
            limit: DEFAULT_PAGINATION_LIMIT,
        },
        queryKey: ['photos', albumId],
        queryFn: ({ pageParam }) =>
            fetchPhotos(albumId, pageParam.page, pageParam.limit),
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
