import {
    BASE_URL,
    DEFAULT_PAGINATION_LIMIT,
    DEFAULT_PAGINATION_PAGE,
    createPaginationQueryParameters,
} from './config';

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export async function fetchPhotos(
    albumId: number | null,
    page = DEFAULT_PAGINATION_PAGE,
    limit = DEFAULT_PAGINATION_LIMIT
): Promise<Photo[]> {
    if (!albumId) {
        return [];
    }

    const response = await fetch(
        `${BASE_URL}/albums/${albumId}/photos?${createPaginationQueryParameters(
            page,
            limit
        )}`
    );
    return await response.json();
}
