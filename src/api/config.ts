export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const DEFAULT_PAGINATION_PAGE = 1;

export const DEFAULT_PAGINATION_LIMIT = 10;

export function createPaginationQueryParameters(
    page = DEFAULT_PAGINATION_PAGE,
    limit = DEFAULT_PAGINATION_LIMIT
) {
    return `_page=${page}&_limit=${limit}`;
}
