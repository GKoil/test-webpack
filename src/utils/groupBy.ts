type MapValuesToKeysIfAllowed<T> = {
  [K in keyof T]: T[K] extends PropertyKey ? K : never;
};
type Filter<T> = MapValuesToKeysIfAllowed<T>[keyof T];

function groupBy<T extends Record<PropertyKey, any>, Key extends Filter<T>>(
  arr: T[],
  key: Key
): Record<T[Key], T[]> {
  return arr.reduce((acc, item) => {
    const groupName = item[key];
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(item);
    return acc;
  }, {} as Record<T[Key], T[]>);
}

export default groupBy;
