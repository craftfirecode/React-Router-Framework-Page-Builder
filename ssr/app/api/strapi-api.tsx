import axios from "axios";

const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
};

async function fetchData(url: string, params?: any) {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    if (!apiUrl) {
        throw new Error("API URL is not defined");
    }

    // Prepare the full URL with query parameters
    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = `${apiUrl}${url}${queryParams ? `?${queryParams}` : ''}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                // Include necessary headers, for example:
                'Content-Type': 'application/json',
                // Add other headers if needed
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

export async function getSettingsData() {
    return fetchData(`/api/navigation?&customPopulate=nested`);
}

export const ApiPlaceholder = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/5`);
    return response.data;
}