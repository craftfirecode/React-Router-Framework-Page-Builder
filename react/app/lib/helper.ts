export function findByCriteria(arr: any, criteria: any) {
  return arr.find((item: any) => {
    return Object.entries(criteria).every(([key, value]) => {
      if (key.startsWith("has:")) {
        const realKey = key.slice(4);
        return realKey in item && (value === true ? !!item[realKey] : true);
      } else {
        return item[key] === value;
      }
    });
  });
}

export function findByChildrenSubUrl(subArray: any[], targetUrl: string) {
  for (const item of subArray) {
    if (item.sub && Array.isArray(item.sub)) {
      const found = item.sub.find((subItem: any) => subItem.url === targetUrl);
      if (found) {
        return found;
      }
    }
  }
  return null; // Falls kein Objekt gefunden wird
}
