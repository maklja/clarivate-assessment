import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../../api/phone';

export const usePhotos = (albumId: number) =>
    useInfiniteQuery({
        initialPageParam: { page: 1, limit: 10 },
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
