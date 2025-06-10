export function findByCriteria(arr: any, criteria: any) {
    return arr.find((item: any) => {
        return Object.entries(criteria).every(([key, value]) => {
            if (key.startsWith('has:')) {
                const realKey = key.slice(4);
                return realKey in item && (
                    value === true ? !!item[realKey] : true
                );
            } else {
                return item[key] === value;
            }
        });
    });
}