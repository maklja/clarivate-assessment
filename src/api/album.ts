import {
    BASE_URL,
    createPaginationQueryParameters,
    DEFAULT_PAGINATION_LIMIT,
    DEFAULT_PAGINATION_PAGE,
} from './config';

export interface Album {
    id: number;
    userId: number;
    title: string;
}

export async function fetchAlbums(
    page = DEFAULT_PAGINATION_PAGE,
    limit = DEFAULT_PAGINATION_LIMIT
): Promise<Album[]> {
    const response = await fetch(
        `${BASE_URL}/albums?${createPaginationQueryParameters(page, limit)}`
    );
    return await response.json();
}
