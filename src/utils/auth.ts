export const getBearerToken = (): string | null => {
    return localStorage.getItem('bearerToken');
}

