export function getPageDataUrl(id: string | number) {
  return {
    url: `${process.env.STRAPI_API_URL}/api/pages?filters[documentId][$eq]=${id}&customPopulate=nested&locale=${process.env.STRAPI_LANG}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  };
}

export function getPostDataUrl(permalink: string) {
  return {
    url: `${process.env.STRAPI_API_URL}/api/posts?filters[url][$eq]=${permalink}&customPopulate=nested&locale=${process.env.STRAPI_LANG}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  };
}

export function getSettingsDataUrl() {
  return {
    url: `${process.env.STRAPI_API_URL}/api/setting?&customPopulate=nested&locale=${process.env.STRAPI_LANG}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  };
}