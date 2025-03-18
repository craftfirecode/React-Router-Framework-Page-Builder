const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_STRAPI_API_KEY}`,
};

async function fetchData(url: string, params?: any) {
    const apiUrl = import.meta.env.VITE_PUBLIC_STRAPI_API_URL;
    if (!apiUrl) {
        throw new Error("API URL is not defined");
    }

    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = `${apiUrl}${url}${queryParams ? `?${queryParams}` : ''}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch from ${fullUrl}`);
        }

        const data = await response.json();
        return data?.data || null;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}

export async function getPageData(urlFilter: string) {
    return fetchData(`/api/pages?filters[url][$eq]=${urlFilter}&customPopulate=nested`);
}


export async function getPostData(urlFilter: string) {
    return fetchData(`/api/posts?filters[url][$eq]=${urlFilter}&customPopulate=nested`);
}

export async function getPostListData() {
    return fetchData(`/api/posts?customPopulate=nested`);
}

export async function getSettingsData() {
    return fetchData(`/api/navigation?customPopulate=nested`);
}