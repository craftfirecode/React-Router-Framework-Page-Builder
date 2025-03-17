export function getPageDataUrl(id: string | number) {
  return {
    url: `http://localhost:1337/api/pages?filters[documentId][$eq]=${id}&customPopulate=nested`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  };
}

export function getPostDataUrl(permalink: string) {
  return {
    url: `http://localhost:1337/api/posts?filters[url][$eq]=${permalink}&customPopulate=nested`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  };
}

export function getSettingsDataUrl() {
  return {
    url: 'http://localhost:1337/api/navigation?&customPopulate=nested',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  };
}