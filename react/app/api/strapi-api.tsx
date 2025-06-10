import {findByCriteria} from "~/lib/helper";

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

export async function getBlogData(urlFilter: string) {
    return fetchData(`/api/blogs?filters[url][$eq]=${urlFilter}&customPopulate=nested`);
}

export async function getBlogListData() {
    return fetchData(`/api/blogs?customPopulate=nested`);
}

export async function getSettingsData() {
    return fetchData(`/api/navigation?customPopulate=nested`);
}

export async function getPageByHref(url: string | string[]) {
    const apiUrl = import.meta.env.VITE_PUBLIC_STRAPI_API_URL;
    const response = await fetch(`${apiUrl}/api/navigation?populate[top][populate]=*`, {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_STRAPI_API_KEY}`
        }
    });
    const res = await response.json();
    const data = res.data;
    if (!data || !data.top) return null;
    return findByCriteria(data.top, {url: url});
}

export async function getPageIndexData(url: string | string[]) {
    const apiUrl = import.meta.env.VITE_PUBLIC_STRAPI_API_URL;
    const response = await fetch(`${apiUrl}/api/navigation?populate[index][populate]=*`, {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_STRAPI_API_KEY}`
        }
    });
    const res = await response.json();
    const data = res.data;
    const a = await getPageDataByDocumentID(data.index.documentId);
    return a || null;
}


export async function getPageByHrefSubpage(segment: string | string[]) {
    const apiUrl = import.meta.env.VITE_PUBLIC_STRAPI_API_URL;
    const response = await fetch(`${apiUrl}/api/navigation?populate[top][populate][page][populate]=*&populate[top][populate][children][populate]=*`, {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_STRAPI_API_KEY}`
        }
    });
    const res = await response.json();
    const data = res.data;
    if (!data || !data.top) return null;

    const startWith = findByCriteria(data.top, {url: segment[0], 'has:children': true});
    return findByCriteria(startWith.children, {url: segment[1]});
}

export async function getPageDataByDocumentID(documentId: string) {
    const apiUrl = import.meta.env.VITE_PUBLIC_STRAPI_API_URL;
    const response = await fetch(`${apiUrl}/api/pages?filters[documentId][$eq]=${documentId}&customPopulate=nested`, {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_STRAPI_API_KEY}`
        }
    });
    return await response.json();
}