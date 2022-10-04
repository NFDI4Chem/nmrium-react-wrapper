export function flatArray<T>(list: Array<T[]>): T[] {
  if (!list || list.length === 0) {
    return [];
  }

  return list.reduce((acc, data) => {
    if (data) {
      // eslint-disable-next-line prettier/prettier
      return acc.concat(data as T[]);
    }
    return acc;
  }, []);
}
